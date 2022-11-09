import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  localStorage.setItem("APIDataCars", JSON.stringify(APIData));

  useEffect(() => {
    axios.get(`http://194.32.107.29/GaAPI/`).then((response) => {
      setAPIData(response.data.cars);
    });
  }, []);

  const setDataCar = (data) => {
    let { id, make, model, year } = data;
    localStorage.setItem("Car_ID", id);
    localStorage.setItem("Make", make);
    localStorage.setItem("Model", model);
    localStorage.setItem("Year", year);
  };

  const getDataCar = () => {
    axios.get(`http://194.32.107.29/GaAPI/`).then((getData) => {
      setAPIData(getData.data.cars);
    });
  };

  const onDeleteCar = (id) => {
    axios.delete(`http://194.32.107.29/GaAPI/car/${id}`).then(() => {
      getDataCar();
    });
  };

  const colors = ["black"];

  return (
    <div>
      <h1>Car</h1>
      {colors.map((color) => (
        <Table color={color} key={color} inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Make</Table.HeaderCell>
              <Table.HeaderCell>Model</Table.HeaderCell>
              <Table.HeaderCell>Year</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {APIData.map((data) => {
              return (
                <Table.Row key={data.id}>
                  <Table.Cell>{data.make}</Table.Cell>
                  <Table.Cell>{data.model}</Table.Cell>
                  <Table.Cell>{data.year}</Table.Cell>
                  <Link to="/updatecar">
                    <Table.Cell>
                      <Button onClick={() => setDataCar(data)}>Update</Button>
                    </Table.Cell>
                  </Link>
                  <Link to="/createcar">
                    <Table.Cell>
                      <Button onClick={() => setDataCar(data.id)}>
                        Create
                      </Button>
                    </Table.Cell>
                  </Link>
                  <Table.Cell>
                    <Button onClick={() => onDeleteCar(data.id)}>Delete</Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      ))}
    </div>
  );
}
