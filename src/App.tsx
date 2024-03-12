import React from 'react';
import { MoviePage } from './pages/MoviePage/MoviePage';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { ChooseSeats } from './pages/ChooseSeats/ChooseSeats';
import { Checkout } from './pages/Checkout'
import "./App.css"

export const  App = () => {
  return (
      <BrowserRouter>
           <Routes>
              <Route index path='/' element={<MoviePage />}/>
              <Route path='/chooseseats/:id' element={<ChooseSeats />}/>
              <Route path='/checkout' element={<Checkout />}/>
          </Routes>
      </BrowserRouter>
  )
}


