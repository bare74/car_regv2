import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

// import PersonCard from "./Person/PersonCard";
// import { Link } from "react-router-dom";

// import CarOwned from "../navigation/CarOwned";

function Home() {
  const [APIData, setAPIData] = useState([]);
  const [APIDataCar, setAPIDataCar] = useState([]);

  localStorage.setItem("APIDataPerson", JSON.stringify(APIData));
  localStorage.setItem("APIDataCars", JSON.stringify(APIDataCar));

  useEffect(() => {
    axios.get(`http://194.32.107.29/GaAPI/`).then((response) => {
      setAPIData(response.data.persons);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://194.32.107.29/GaAPI/`).then((response) => {
      setAPIDataCar(response.data.cars);
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

  return (
    <Row xs={1} md={2} className="g-4">
      {APIData.map((data) => (
        <Col key={data.id}>
          <Card text="dark">
            <Card.Img />
            <Card.Body>
              <Card.Title>{data.firstName}</Card.Title>
              <Card.Text>{data.lastName}</Card.Text>
              <Card.Text>{data.age}</Card.Text>
              <Link to="/person">
                <Button variant="primary" onClick={() => setData(data)}>
                  SITE
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Home;
