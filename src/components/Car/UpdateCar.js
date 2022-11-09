import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

export default function UpdateCar() {
  let history = useHistory();
  const [idCar, setIDCar] = useState(0);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  console.log(idCar);

  useEffect(() => {
    setIDCar(localStorage.getItem("Car_ID"));
    setMake(localStorage.getItem("Make"));
    setModel(localStorage.getItem("Model"));
    setYear(localStorage.getItem("Year"));
  }, []);

  const updateAPIDataCar = () => {
    axios({
      method: "PUT",
      url: "http://194.32.107.29/GaAPI/car/" + idCar,
      datatype: "jsonp",
      data: {
        make: make,
        model: model,
        year: year,
      },
    })
      .then((response) => {
        console.log(response);
        history.push("/car");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Make</label>
          <input
            type={"text"}
            placeholder="Make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Model</label>
          <input
            type={"text"}
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Year</label>
          <input
            type={"number"}
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.valueAsNumber)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateAPIDataCar}>
          Update
        </Button>
      </Form>
    </div>
  );
}
