import { useState, useEffect } from "react";
import Header from "./components/Header"
import RadioList from "./components/RadioList"
import RadioListItems from "./components/RadioListItems"
function App() {

const [radios, setRadios] = useState([])

 useEffect(()=> {
    fetch("/radios")
    .then(resp => resp.json())
    .then(setRadios)
 }, [])

  return (
    <>
    <Header
    name = "radio tracker"
    />
    <RadioList
   radios = {radios}
    />
    <RadioListItems
    />
    </>

  );
}

export default App;
