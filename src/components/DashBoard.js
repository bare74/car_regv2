import React from "react";
import PersonCard from "./Person/PersonCard";
import SelectCar from "./SelectCar";

export const DashBoard = () => {
  return (
    <div>
      <div>
        <PersonCard />
        <br></br>
        <br></br>
        <SelectCar />
      </div>
    </div>
  );
};
