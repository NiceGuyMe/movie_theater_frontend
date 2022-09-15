import React,{useState} from 'react';
import { useEffect } from 'react'
import axios from 'axios';
import '../App.css'
import MovieTable from './MovieTable';
import { FOOT } from './Reservation_type';

function HEAD(params) {
    return (
      <>
       <div class="topnav">
          <a  href="./auditorium">
            Auditorium
          </a>
          <a  href="./employee">Employee</a>
          <a class="active" href="./movie">Movie</a>
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
    const [list,setList] = useState([]);
  useEffect(() =>{
      const promise = axios.get("http://localhost:8080/movies/");
      promise.then( (response) => {
          setList(response.data);
          console.log(response.data);
      }).catch((error) => {
          console.error(error);
      })

  },[]);
    return (
        <>
            <section className="u-align-center u-clearfix u-section-1" id="sec-d01b">

                <div className="u-clearfix u-sheet u-sheet-1">
                    <div className="u-expanded-width u-table u-table-responsive u-table-1">
                        
                    <MovieTable list={list}/>

                    </div>
                </div>
            </section>
        </>
    )

}



function Movie(params) {
    return (
        <>
            <HEAD />
            <BODY />
            <FOOT />
        </>
    )
}

export default Movie;