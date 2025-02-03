import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import CategoryBox from './CategoryBox';
import ImagesSlider from './ImageSlider';
import Eventcard from './Eventcard';

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
                <button style={styles.createButton}>+ Create</button>
                <button style={styles.ticketButton}>Tickets</button>
            </div>


            <div>
                <CategoryBox />
                <div  className="upcoming-events" style={styles.upcoming}>
                    <label style={styles.label}>UPCOMING EVENTS</label>
                    <hr style={styles.hr}/>
                    <div className="event-cards">
              <Eventcard />
              <Eventcard />  
              <Eventcard />    
              </div>
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
        display: 'flex',
        alignItems: 'center',
        // padding: '10px 20px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#008080', // Teal green hex code
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
      },
      ticketButton: {
        display: 'flex',
        alignItems: 'center',
        // padding: '10px 20px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#008080', // Teal green hex code
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
      },
      // cont: {
      //   // display: "flex",
      //   // alignItems: "center",
      //   // marginTop: "10px",
      //   top: "105vh",
      //   zIndex: "2px",
      //   height: "fit-content",
      // },
      upcoming: {
        position: "relative",
        top: "82vh",
        left: "24%",
        margin: "5px",
      },
      hr: {
        height: "1px",
        width: "70%",
        color: "black",
        backgroundImage: "linear-gradient(90deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 100%, rgba(255, 0, 0, 0) 50%)",
        border: "none",
        position: "absolute",
        margin: "0.5px",
        marginBottom: "10px",
     },
     label: {
      marginBottom: "0",
      color: "#E0E0E0",
     },
     
     
};
export default Events;