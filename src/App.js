import React from 'react';
import './App.css';
import Auditorium from './components/Auditorium';
import Employee from './components/Employee';
import Movie from './components/Movie'
import Reservation_type from './components/Reservation_type';
import Reservation from './components/Reservation';
import Screening from './components/Screening'
import Seat from './components/Seat';
import SeatReserved from './components/Seat_Reserved';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/auditorium" element={<Auditorium />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/reservation_type" element={<Reservation_type />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/screening" element={<Screening />} />
          <Route path="/seat" element={<Seat />} />
          <Route path="/seat_reserved" element={<SeatReserved />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
