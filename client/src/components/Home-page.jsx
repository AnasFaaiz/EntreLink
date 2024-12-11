import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
        <div className='main-page'>
            <Navbar />            
        </div>
  );
};
export default HomePage;

