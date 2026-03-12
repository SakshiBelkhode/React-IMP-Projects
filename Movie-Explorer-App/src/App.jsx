import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

import "./styles/App.css";

const App = () => {

  return (

    <div>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:id" element={<MovieDetails />} />

      </Routes>

    </div>

  );

};

export default App;