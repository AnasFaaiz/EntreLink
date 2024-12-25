import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import Navbar from './Navbar';
import CategoryBox from './Events/CategoryBox';

const Events = () => {
    return (
        <div>
            <Navbar />
            
            <div className='Locations' style={styles.locations}>
                <select style={styles.dropdown}>
                    <option value="Location">Location..</option>
                    <option value="online">Online</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Pune">Pune</option>
                </select>
            </div>

            <CategoryBox />


        </div>
    );
};

const styles = {
    locations: {
        color: "black",
        padding: "10px",
        width: "400px",
        margin: "0 auto",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: "50px",
        left: "23%",
      },
      dropdown: {
        width: "40%",
        padding: "10px",
        paddingBottom: "5px",
        borderRadius: "20px",
        border: "1px solid #ccc",
        fontSize: "13px",
        height: "35px",
        marginTop: "9px",
      }
};
export default Events;