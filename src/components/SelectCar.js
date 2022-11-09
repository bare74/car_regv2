import React, { useState } from "react";
import axios from "axios";

export default function SelectCar() {
  let AllCars = JSON.parse(localStorage.getItem("APIDataCars"));
  let firstName = localStorage.getItem("First Name");
  let lastName = localStorage.getItem("Last Name");
  let idPerson = localStorage.getItem("ID");
  let age = localStorage.getItem("Age");
  const [car, setCar] = useState("Velg bil");

  // console.log(idPerson);

  const handleCarChange = (e) => {
    setCar(e.target.value);
  };

  // const count = parseInt(car, 10);
  // const NewcarOwned = AllCars.filter((filter) => filter.id === count);

  console.log(car);

  const updateAPIDataCar = (data) => {
    axios({
      method: "PUT",
      url: "http://194.32.107.29/GaAPI/person/" + idPerson,
      datatype: "jsonp",
      data: {
        firstName: firstName,
        lastName: lastName,
        age: age,
        carsOwned: car,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <select onChange={handleCarChange}>
        <option value="">Velg bil</option>
        {AllCars.map((car) => (
          <option key={car.id} value={car.id}>
            {car.make} {car.model} {car.year}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          updateAPIDataCar();
        }}
      >
        Velg Ny bil til eier
      </button>
    </div>
  );
}
