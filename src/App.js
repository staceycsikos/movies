import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllMovies from "./components/AllMovies";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://ga-movies-api.herokuapp.com/ids",
      {
        mode: "no-cors",
      }
    );
    setData(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-movies" element={<AllMovies data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
