import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Create() {
  let history = useHistory();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const postData = () => {
    axios
      .post(`http://194.32.107.29/GaAPI/car`, {
        make: make,
        model: model,
        year: year,
      })
      .then((response) => {
        console.log(response);
        history.push("/car");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Make</label>
          <input placeholder="Make" onChange={(e) => setMake(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Model</label>
          <input
            placeholder="Model"
            onChange={(e) => setModel(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            type={"number"}
            placeholder="Year"
            onChange={(e) => setYear(e.target.valueAsNumber)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
