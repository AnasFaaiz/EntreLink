import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import Navbar from './Navbar';

const Events = () => {
    return (
        <div>
            <Navbar />
            <h1>Events</h1>
        </div>
    );
};
export default Events;