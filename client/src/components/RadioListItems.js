import React,{useState}from "react";
import { Card } from "semantic-ui-react";

function RadioListItems({radio}) {

   const [isAssigned, setAssigned] = useState(false);
  
 
  const handleClick = (e) => {
    
    console.log(e)
    setAssigned(!isAssigned);
  }
  return (
    <Card>
      <div>     
      <div className="serial number"> Serial Number: {radio.serial_number}</div> 
      <span>
      <i className="model number" /> Model Number: {radio.model} </span>
      <button onClick={handleClick}> {isAssigned ? "Assigned" : "Not Assigned"}</button>
      </div>
    </Card>
  );
}

export default RadioListItems;
