import React, { useState, useEffect } from 'react';
import './App.css';
import Character from "./components/Character"
import axios from "axios";

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

const App = () => {
  const [characters, setCharacters] = useState([]);
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://swapi.co/api/people';

  useEffect(() => {
    axios
      .get(proxy+url)
      .then((response) => {
          console.log(response.data.results);
          setCharacters(response.data.results);;
      })
      .catch((error => {
         console.log("the data was not return", error);

    }));


  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
        characters.map(character => {
          return(<Character character={character}/>)
        })
      }
  		</div>
  	);
  };

export default App;
