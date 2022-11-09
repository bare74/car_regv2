import React from "react";
import { Card, Icon } from "semantic-ui-react";
import CarOwned from "../../navigation/CarOwned";

const PersonCard = () => {
  const firstName = localStorage.getItem("First Name");
  const lastName = localStorage.getItem("Last Name");
  const age = localStorage.getItem("Age");

  const extra = (
    <div>
      <Icon name="car" /> <CarOwned />
    </div>
  );

  return (
    <div>
      <Card
        image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        header={firstName}
        meta={lastName}
        description={age}
        extra={extra}
      />
    </div>
  );
};

export default PersonCard;
