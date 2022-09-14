import React,{useState} from 'react';
import'../App.css'
import axios from 'axios';
import EmployeeTable from './EmployeeTable';
import { useEffect } from 'react'
import { FOOT } from './Reservation_type';

function HEAD(params) {
  return (
    <>
     <div class="topnav">
          <a href="./auditorium">
            Auditorium
          </a>
        <a class="active" href="./employee">Employee</a>
        <a href="./movie">Movie</a>
        <a href="./reservation_type">Reservation_type</a>
        <a href="./reservation">Reservation</a>
      </div>
    </>
  );
}



function BODY(params) {
  const [list,setList] = useState([]);
  useEffect(() =>{
      const promise = axios.get("http://localhost:8080/employees/");
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
          <a href="https://nicepage.com/wordpress-website-builder"
            className="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-hover-white u-btn-1">ADD<br></br>
          </a>
          <a href="https://nicepage.com/wordpress-website-builder"
            className="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-hover-white u-btn-2">MODIFY<br></br>
          </a>
          <div className="u-expanded-width u-table u-table-responsive u-table-1">
           
          <EmployeeTable list={list}/>
          </div>
        </div>
      </section>
    </>
  )

}

function Employee(params) {
  return (
    <>
      <HEAD />
      <BODY />
      <FOOT />
    </>
  )
}

export default Employee;