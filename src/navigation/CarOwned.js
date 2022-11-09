import React from "react";
// import axios from "axios";

export default function CarOwned() {
  let AllCars = JSON.parse(localStorage.getItem("APIDataCars"));

  // const cars = AllCars;
  const carOwned = localStorage.getItem("Car Owned");
  const count = parseInt(carOwned, 10);

  const setCarOwnedMake = AllCars.filter((filter) => filter.id === count);

  console.log(setCarOwnedMake);

  return (
    <ul>
      {setCarOwnedMake.map((data) => {
        return (
          <li style={{ listStyle: "none", color: "black" }} key={data.id}>
            <strong>
              {data.make} {data.model} {data.year}
            </strong>
          </li>
        );
      })}
    </ul>
  );
}
