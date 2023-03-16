import { useState, useEffect } from "react";
import RadioList from "./RadioList"
import RadioForm from "./RadioForm"
import DeputyList from "./DeputyList"
import DeputyForm from "./DeuptyForm"
import { Container } from "semantic-ui-react";
import {Switch, Route} from "react-router-dom"
import Login from "./Login"
function RadioPage() {

const [radios, setRadios] = useState([])
const [deputies, setDeputies] = useState([])
 useEffect(()=> {
    fetch("http://127.0.0.1:3000/radios")
    .then(resp => resp.json())
    .then(setRadios)
 }, [])

 useEffect(()=> {
  fetch("http://127.0.0.1:3000/deputies")
  .then(resp => resp.json())
  .then(setDeputies)
}, [])


 const handleNewRadio =(myRadio) => {
  setRadios([myRadio, ...radios])
 }
 const handleNewDeputy =(myDeputy) => {
  setDeputies([myDeputy, ...radios])
 }
 return (
    <Container>
   
  <Switch>

  <Route exact path="/">
      <RadioList 
      radio = {radios} 
      />
    </Route>
    
     <Route path= "/radios/new">
      <RadioForm 
      handleNewRadio = {handleNewRadio}
      />
     </Route>
      

    <Route path= "/deputies/new">
      <DeputyForm
      handleNewDeputy = {handleNewDeputy}
      />
    </Route>

    <Route path= "/deputies">
      <DeputyList
      deputy = {deputies}
      />
    </Route>
    
  <Route path = "/login">
  </Route>
     </Switch>
    </Container>
  );
}

export default RadioPage;
