import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

export default function CreatePerson() {
  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [carsOwned, setCarsOwned] = useState("");

  const postData = () => {
    axios
      .post(`http://194.32.107.29/GaAPI/person`, {
        firstname: firstName,
        lastName: lastName,
        age: age,
        carsOwned: carsOwned,
      })
      .then((response) => {
        console.log(response);
        history.push("/read");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            type={"number"}
            placeholder="Age"
            onChange={(e) => setAge(e.target.valueAsNumber)}
          />
        </Form.Field>
        <Form.Field>
          <label>Car Owned</label>
          <input
            type={"text"}
            placeholder="Car Owned"
            onChange={(e) => setCarsOwned(e.target.value)}
          />
        </Form.Field>

        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
