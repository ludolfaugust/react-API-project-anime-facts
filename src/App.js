import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Facts from "./Facts";

function App() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    axios
      .get("https://anime-facts-rest-api.herokuapp.com/api/v1")
      .then((res) => {
        setFacts(res.data.data);
        console.log(res.data);
      })
      .catch((error) => alert("Error"));
  }, []);

  return (
    <div className="App">
      <h1 className="anime-facts">anime-facts</h1>
      <div className="anime-container">
        {facts.map((fact) => {
          return (
            <Facts
              key={fact.anime_id}
              name={fact.anime_name}
              image={fact.anime_img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
