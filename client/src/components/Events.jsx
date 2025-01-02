import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import Navbar from './Navbar';
import CategoryBox from './Events/CategoryBox';
import ImagesSlider from './Events/ImageSlider';

const Events = () => {
    const images = [
        "./images/Event1.jpg",
        "./images/Event2.jpg",
        "./images/Event3.png",
    ];
    return (
        <div>
            <Navbar />

            <div className='eventPhoto'>
                <ImagesSlider images={images} />
            </div>
            
            <div className='Locations' style={styles.locations}>
                <select style={styles.dropdown}>
                    <option value="" disabled selected >Location..</option>
                    <option value="online">Online</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Pune">Pune</option>
                </select>
                <button style={styles.ticketButton}>My Ticket</button>
            </div>


            <div className="contcontainer" styles={styles.cont}>
                <CategoryBox />
                <div className="upcoming-events" style={styles.upcoming}>
                    <label atyle={styles.label}>Upcoming Events</label>
                    <hr style={styles.hr}/>
                </div>
            </div>

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
        top: "98vh",
        left: "75%",
        gap: "10px",
      },
      dropdown: {
        width: "40%",
        padding: "10px",
        paddingBottom: "5px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        fontSize: "13px",
        height: "35px",
        marginTop: "9px",
      },
      ticketButton: {
        borderRadius: "10px",
        border: "1px solid #ccc",
        backgroundColor: "green",
        padding: "7px 22px",
        cursor: "pointer",
        marginTop: "8px",
      },
      cont: {
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
      },
      upcoming: {
        marginLeft: "20px",
        position: "relative",
        top: "10vh",
        left: "22%",
      },
      hr: {
        height: "1px",
        width: "70%",
        color: "black",
        backgroundImage: "linear-gradient(90deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 100%, rgba(255, 0, 0, 0) 50%)",
        border: "none",
        position: "absolute",
        margin: "0.5px",
     },
     label: {
      marginBottom: "0",
     },
};
export default Events;