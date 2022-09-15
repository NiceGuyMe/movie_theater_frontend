import React, { useState } from 'react';
import '../App.css'
import axios from 'axios';
import AudTable from './Auditorium_table';
import { useEffect } from 'react'
import { FOOT } from './Reservation_type';

function HEAD(params) {
  return (
    <>
      <div class="topnav">
        <a class="active" href="./auditorium">
          Auditorium
        </a>
        <a href="./employee">Employee</a>
        <a href="./movie">Movie</a>
        <a href="./reservation_type">Reservation_type</a>
        <a href="./reservation">Reservation</a>
        <a href="./screening">Screening</a>
        <a href="./seat">seat</a>
        <a href="./seat_reserved">seat reserved</a>
      </div>
    </>
  );
}



function BODY(params) {
  const [list, setList] = useState([]);
  useEffect(() => {
    const promise = axios.get("http://localhost:8080/auditoriums/");
    promise.then((response) => {
      setList(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    })

  }, []);
  return (
    <>
      <section>
        <div>
          <div>
          <button>ADD</button>
            <AudTable list={list} />
            
          </div>
        </div>
      </section>
    </>
  )

}

function Auditorium(params) {
  return (
    <>
      <HEAD />
      <BODY />
      <FOOT />
    </>
  )
}

export default Auditorium;