import React, { useState } from 'react';
import { moviesData } from "./Components/Data/Data.js"
import './App.css';
import MovieList from './Components/MovieList/MovieList.js';
import AddMovie from './Components/AddMovie/AddMovie.js';
import FilterByName from './Components/FilterByName/FilterByName.js';
import FilterByRate from './Components/Rating/Rating';


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);


  const add = (newMovie) => {
    setMovies([...movies, newMovie])

  }

  return (
    <div className="App">
      <div><h1>MOVIE APP</h1></div>
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <FilterByRate
        isMovieRating={false}
        rating={rating}
        setRating={setRating} />
      <AddMovie add={add} />
      <MovieList movies={movies} inputSearch={inputSearch} rating={rating} />   
    </div>
  );
}

export default App;
