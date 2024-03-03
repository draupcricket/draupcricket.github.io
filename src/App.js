import './App.css';

import NavBar from './components/NavBar/NavBar';
import  { HeroScrollDemo }  from './components/New_header/New_header';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';



import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
       <NavBar />
       <HeroScrollDemo />
     
   
    </div>
  );
}

export default App;
