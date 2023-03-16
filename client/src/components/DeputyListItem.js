import React from "react";
import { Card } from "semantic-ui-react";

function RadioListItems({deputy}) {
  return (
    <Card>
      <div>     
      <div className="First Name"> First Name: {deputy.first_name}</div>
      <div className="Last Name">  Last Name: {deputy.last_name}</div>
      <div className="Identification Numberr"> Id: {deputy.identification_number}</div>
      <div className="resign"> Resign: {deputy.resign}</div>
      <div className="location"> Location: {deputy.location}</div>
      
      </div>
    </Card>
  );
}

export default RadioListItems;
