import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

export default function UpdatePerson() {
  let history = useHistory();
  const [id, setID] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [carsOwned, setCarsOwned] = useState("");

  console.log(id);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setAge(localStorage.getItem("Age"));
    setCarsOwned(localStorage.getItem("Car Owned"));
  }, []);

  const updateAPIData = () => {
    axios({
      method: "PUT",
      url: "http://194.32.107.29/GaAPI/person/" + id,
      datatype: "jsonp",
      data: {
        firstName: firstName,
        lastName: lastName,
        age: age,
        carsOwned: carsOwned,
      },
    })
      .then((response) => {
        console.log(response);
        history.push("/read");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            type={"text"}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            type={"text"}
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            type={"number"}
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.valueAsNumber)}
          />
        </Form.Field>
        <Form.Field>
          <label>Car Owned</label>
          <input
            type={"text"}
            placeholder="Car Owned"
            value={carsOwned}
            onChange={(e) => setCarsOwned(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
}
