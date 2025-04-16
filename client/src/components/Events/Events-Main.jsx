import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import CategoryBox from './CategoryBox';
import ImagesSlider from './ImageSlider';
import Eventcard from './Eventcard';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
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
                <button style={styles.createButton} onClick={() => setShowDialog(true)}>+ Create</button>
                <button style={styles.ticketButton}>Tickets</button>
            </div>

            {showDialog && (
                <div style={styles.overlay}>
                    <div style={styles.dialog}>
                        <h2 style={styles.dialogTitle}>Create New Event</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            setShowDialog(false);
                            // Add your form submission logic here
                        }}>
                            <div style={styles.formGroup}>
                                <label>Event Name</label>
                                <input type="text" required style={styles.input} />
                            </div>
                            <div style={styles.formGroup}>
                                <label>Date & Time</label>
                                <input type="datetime-local" required style={styles.input} />
                            </div>
                            <div style={styles.formGroup}>
                                <label>Location</label>
                                <input type="text" required style={styles.input} />
                            </div>
                            <div style={styles.formGroup}>
                                <label>Description</label>
                                <textarea style={styles.textarea} required rows="4" />
                            </div>
                            <div style={styles.buttonGroup}>
                                <button type="submit" style={styles.submitButton}>Create Event</button>
                                <button type="button" 
                                        onClick={() => setShowDialog(false)} 
                                        style={styles.cancelButton}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            <div>
                <CategoryBox />
                <div  className="upcoming-events" style={styles.upcoming}>
                  <label style={styles.label}>UPCOMING EVENTS</label>
                  <hr style={styles.hr}/>
                  <div className="event-cards" style={styles.cards}>
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
        width: "200px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        position: "relative",
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
        width: "75%",
      },
      cards: {
        width: "100%",
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
      color: "#127e59",
     },
     overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(5px)',
  },
  dialog: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '500px',
    maxWidth: '90%',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    transform: 'translateY(0)',
    animation: 'slideIn 0.3s ease-out',
  },
  dialogTitle: {
      color: '#008080',
      marginBottom: '20px',
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: '600',
  },
  formGroup: {
      marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '8px',
    border: '2px solid #e0e0e0',
        fontSize: '16px',
        transition: 'border-color 0.3s ease',
        outline: 'none',
        '&:focus': {
            borderColor: '#008080',
        }
  },
  textarea: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '2px solid #e0e0e0',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    outline: 'none',
    resize: 'vertical',
    minHeight: '120px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px',
    marginTop: '30px',
  },
  submitButton: {
    backgroundColor: '#008080',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'transform 0.2s ease, background-color 0.2s ease',
        '&:hover': {
            backgroundColor: '#006666',
            transform: 'translateY(-2px)',
        }
  },
  cancelButton: {
    backgroundColor: '#666',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'transform 0.2s ease, background-color 0.2s ease',
    '&:hover': {
        backgroundColor: '#555',
        transform: 'translateY(-2px)',
    }
  }
     
     
};
export default Events;