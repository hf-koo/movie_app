import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

// 5940904c

const API_URL = "http://www.omdbapi.com?apikey=5940904c";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div>
      <h1>APP </h1>
    </div>
  );
}

export default App;
