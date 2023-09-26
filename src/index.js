import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import Sample from './mernstack/Sample';
import Routing from './mernstack/Routing';
import Sample_get from './mernstack/Sample_get';
import Userdetailes1 from './mernstack/Userdetailes1';
import Userdetailes2 from './mernstack/Userdetailes2';
import User_table from './mernstack/User_table';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routing/>

   {/* < Sample/> */}
  
   {/* <Userdetailes1/> */}
</BrowserRouter>,
);


reportWebVitals();
