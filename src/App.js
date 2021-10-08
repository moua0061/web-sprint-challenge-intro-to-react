import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Character from "./components/Character";



//styled componenents goes here!!!!!!


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starWarsData, setStarsData] = useState([]);
  

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(resp => {
        console.log(resp.data)
          return setStarsData(resp.data);
      })
      .catch ( err => {
        console.log('your shit ain\'t working!!');
      })
  },[])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
        starWarsData.data.map((character) => 
        <Character starWarsData={character})
      } 
    </div>
  );
}

export default App;
