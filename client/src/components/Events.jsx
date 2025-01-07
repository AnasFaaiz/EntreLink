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
                {/* <select style={styles.dropdown}>
                    <option value="" disabled selected >map</option>
                    <option value="online">Online</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Pune">Pune</option>
                </select> */}
                <button style={styles.createButton}>+ Create</button>
                <button style={styles.ticketButton}>Tickets</button>
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
        // margin: "0 auto",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: "87vh",
        left: "80%",
        gap: "5px",
        zIndex: "1",
      },
      dropdown: {
        width: "30%",
        padding: "6px",
        paddingBottom: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "13px",
        height: "35px",
        marginTop: "9px",
      },
      createButton: {
      borderRadius: "5px",
      padding: "4px 10px",
      border: "1px solid #ccc",
      backgroundColor: "green",
      cursor: "pointer",
      marginTop: "8px",
      },
      ticketButton: {
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: "green",
        padding: "4px 10px",
        cursor: "pointer",
        marginTop: "8px",
      },
      cont: {
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
      },
      upcoming: {
        position: "relative",
        top: "4vh",
        left: "24%",
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