/* eslint-disable */ 
import React from 'react'
import { Routes, Route } from "react-router-dom"
import Register from './Register'
import User_table from './User_table'
import { Link } from "react-router-dom";
import ChartLogin from './ChartLogin';
import Chart from './Chart';
import api_link from './link';

function Routing() {

  return (
    <div>
        <Routes>
        <Route path="/" element={ <ChartLogin/> } />
        <Route path="User_table" element={ <User_table/> } />
        <Route path="ChartLogin" element={ <ChartLogin/> } />
        <Route path="Chart" element={ <Chart/> } />
        <Route path="Register" element={ <Register/> } />
       
      </Routes>
      
    </div>
  )
}

export default Routing
