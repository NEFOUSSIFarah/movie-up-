import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Footer from './Components/Footer/Footer';
import MovieCards from './Components/MovieCards/MovieCards';
import NavBar from './Components/NavBar/NavBar';
import Errors from './Components/Errors/Errors';

const Home = () => {
  return (
    <div>

      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/MovieCard' element={<MovieCards />} />
       <Route path='/*' element={<Errors />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default Home