import { useState, useEffect } from "react";
import RadioList from "./RadioList"
import { Container } from "semantic-ui-react";

function RadioPage() {

const [radios, setRadios] = useState([])

 useEffect(()=> {
    fetch("http://127.0.0.1:3000/radios")
    .then(resp => resp.json())
    .then(setRadios)
 }, [])

 return (
    <Container>
      <h1>Radios</h1>
    
      <RadioList
      radio = {radios} />
     
    </Container>
  );
}

export default RadioPage;
