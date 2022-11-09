import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function ReadPerson() {
  const [APIData, setAPIData] = useState([]);
  localStorage.setItem("APIDataPerson", JSON.stringify(APIData));
  useEffect(() => {
    axios.get(`http://194.32.107.29/GaAPI/`).then((response) => {
      setAPIData(response.data.persons);
    });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, age, carsOwned } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Age", age);
    localStorage.setItem("Car Owned", carsOwned);
  };

  const getData = () => {
    axios.get(`http://194.32.107.29/GaAPI/`).then((getData) => {
      setAPIData(getData.data.persons);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://194.32.107.29/GaAPI/person/${id}`).then(() => {
      getData();
    });
  };
  const colors = ["black"];

  return (
    <div>
      <h1>Person</h1>
      {colors.map((color) => (
        <Table color={color} key={color} inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {APIData.map((data) => {
              return (
                <Table.Row key={data.id}>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Table.Cell>{data.age}</Table.Cell>
                  <Link to="/update">
                    <Table.Cell>
                      <div></div>
                      <Button onClick={() => setData(data)}>Update</Button>
                    </Table.Cell>
                  </Link>
                  <Table.Cell>
                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                  </Table.Cell>
                  <Link to="/create">
                    <Table.Cell>
                      <Button>Create</Button>
                    </Table.Cell>
                  </Link>
                  <Link to="/person">
                    <Table.Cell>
                      <Button onClick={() => setData(data)}>Site</Button>
                    </Table.Cell>
                  </Link>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      ))}
    </div>
  );
}
