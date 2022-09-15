import React, { useState } from "react";
import '../App.css'
import axios from 'axios';
import { useEffect } from 'react'
import { FOOT } from "./Reservation_type";
import SeatTable from "./SeatTable";

function HEAD(params) {
  return (
    <>
      <div class="topnav">
        <a  href="./auditorium">
          Auditorium
        </a>
        <a href="./employee">Employee</a>
        <a href="./movie">Movie</a>
        <a href="./reservation_type">Reservation_type</a>
        <a href="./reservation">Reservation</a>
        <a href="./screening">Screening</a>
        <a class="active" href="./seat">seat</a>
        <a  href="./seat_reserved">Seat Reserved</a>
      </div>
    </>
  );
}

function BODY(params) {
  const [list, setList] = useState([]);
  useEffect(() => {
    const promise = axios.get("http://localhost:8080/seats/");
    promise.then((response) => {
      setList(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    })

  }, []);

  return (
    <>
      <section className="u-align-center u-clearfix u-section-1" id="sec-d01b">

        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-expanded-width u-table u-table-responsive u-table-1">
            <SeatTable list={list} />
          </div>
        </div>
      </section>
    </>
  );
}

function Seat(params) {
  return (
    <>
      <HEAD />
      <BODY />
      <FOOT />
    </>
  );
}
export default Seat;

