import React from "react";
import { Card } from "semantic-ui-react";

function RadioListItems({radio}) {
  return (
    <Card>
      <div>     
      <div className="serial number"> Serial Number: {radio.serial_number}</div> 
      <span>
      <i className="model number" /> Model Number: {radio.model} </span>
      </div>
    </Card>
  );
}

export default RadioListItems;
