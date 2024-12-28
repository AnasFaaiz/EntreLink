import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
        <div className='main-page'>
            <Navbar />    
            <h1>Home Page</h1>        
        </div>
  );
};
export default HomePage;

