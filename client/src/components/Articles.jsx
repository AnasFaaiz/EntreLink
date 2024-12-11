import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import Navbar from './Navbar';

const Articles = () => {
    return (
        <div>
            <Navbar />
            <h1>Articles</h1>
        </div>
    );
};
export default Articles;