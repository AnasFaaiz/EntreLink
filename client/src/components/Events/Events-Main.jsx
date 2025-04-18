import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import CategoryBox from './CategoryBox';
import ImagesSlider from './ImageSlider';
import Eventcard from './Eventcard';
import colorPalette from '../colorPalette';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [eventData, setEventData] = useState({
        name: '',
        date: '',
        startTime: '',
        endTime: '',
        location: '',
        description: '',
        category: '',
        type: 'offline',
        price: '',
        capacity: '',
        imageUrl: ''
    });
    const [showDialog, setShowDialog] = useState(false);
    const images = [
        "./images/Event1.jpg",
        "./images/Event2.jpg",
        "./images/Event3.png",
    ];

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setEventData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!eventData.name || !eventData.date || !eventData.location) {
            alert('Please fill in all required fields');
            return;
        }
    
        // Create new event
        const newEvent = {
            ...eventData,
            price: eventData.price || '0', // Default price if empty
            capacity: eventData.capacity || 'Unlimited', // Default capacity if empty
        };
    
        // Add to events array
        setEvents(prevEvents => [...prevEvents, newEvent]);
    
        // Reset form
        setEventData({
            name: '',
            date: '',
            startTime: '',
            endTime: '',
            location: '',
            description: '',
            category: '',
            type: 'offline',
            price: '',
            capacity: '',
            imageUrl: ''
        });
    
        // Close dialog
        setShowDialog(false);
    };
    
    return (
        <div>
            <Navbar />

            <div className='eventPhoto' style={styles.heroSection}>
                <ImagesSlider images={images} />
                <div className='Locations' style={styles.locations}>
                    <button style={styles.createButton} onClick={() => setShowDialog(true)}>+ Create</button>
                    <button style={styles.ticketButton}>Tickets</button>
                </div>
            </div>

            {showDialog && (
                <div style={styles.overlay}>
                    <div style={styles.dialog}>
                        <h2 style={styles.dialogTitle}>Create New Event</h2>
                        <form onSubmit={handleSubmit}>
                            <div style={styles.formGrid}>
                                <div style={styles.formGroup}>
                                    <label style={styles.label}>Event Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={eventData.name}
                                        onChange={handleInputChange}
                                        required 
                                        style={styles.input} 
                                    />
                                </div>

                                <div style={styles.formRow}>
                                    <div style={styles.formGroup}>
                                        <label style={styles.label}>Date</label>
                                        <input 
                                            type="date" 
                                            name="date"
                                            value={eventData.date}
                                            onChange={handleInputChange}
                                            required 
                                            style={styles.input} 
                                        />
                                    </div>
                                    <div style={styles.formGroup}>
                                        <label style={styles.label}>Start Time</label>
                                        <input 
                                            type="time" 
                                            name="startTime"
                                            value={eventData.startTime}
                                            onChange={handleInputChange}
                                            required 
                                            style={styles.input} 
                                        />
                                    </div>
                                    <div style={styles.formGroup}>
                                        <label style={styles.label}>End Time</label>
                                        <input 
                                            type="time" 
                                            name="endTime"
                                            value={eventData.endTime}
                                            onChange={handleInputChange}
                                            required 
                                            style={styles.input} 
                                        />
                                    </div>
                                </div>

                                <div style={styles.formGroup}>
                                    <label style={styles.label}>Location</label>
                                    <input 
                                        type="text" 
                                        name="location"
                                        value={eventData.location}
                                        onChange={handleInputChange}
                                        required 
                                        style={styles.input} 
                                    />
                                </div>

                                <div style={styles.formRow}>
                                    <div style={styles.formGroup}>
                                        <label style={styles.label}>Category</label>
                                        <select 
                                            name="category"
                                            value={eventData.category}
                                            onChange={handleInputChange}
                                            required 
                                            style={styles.select}
                                        >
                                            <option value="">Select Category</option>
                                            <option value="startup_pitch">Startup Pitch</option>
                                            <option value="networking">Networking</option>
                                            <option value="workshop">Workshop</option>
                                            <option value="conference">Conference</option>
                                        </select>
                                    </div>
                                    <div style={styles.formGroup}>
                                        <label style={styles.label}>Event Type</label>
                                        <select 
                                            name="type"
                                            value={eventData.type}
                                            onChange={handleInputChange}
                                            required 
                                            style={styles.select}
                                        >
                                            <option value="offline">Offline</option>
                                            <option value="online">Online</option>
                                            <option value="hybrid">Hybrid</option>
                                        </select>
                                    </div>
                                </div>

                                <div style={styles.formRow}>
                                    <div style={styles.formGroup}>
                                        <label style={styles.label}>Price (₹)</label>
                                        <input 
                                            type="number" 
                                            name="price"
                                            value={eventData.price}
                                            onChange={handleInputChange}
                                            min="0"
                                            style={styles.input} 
                                        />
                                    </div>
                                    <div style={styles.formGroup}>
                                        <label style={styles.label}>Capacity</label>
                                        <input 
                                            type="number" 
                                            name="capacity"
                                            value={eventData.capacity}
                                            onChange={handleInputChange}
                                            min="1"
                                            style={styles.input} 
                                        />
                                    </div>
                                </div>

                                <div style={styles.formGroup}>
                                    <label style={styles.label}>Event Image URL</label>
                                    <input 
                                        type="url" 
                                        name="imageUrl"
                                        value={eventData.imageUrl}
                                        onChange={handleInputChange}
                                        required 
                                        style={styles.input} 
                                    />
                                </div>

                                <div style={styles.formGroup}>
                                    <label style={styles.label}>Description</label>
                                    <textarea 
                                        name="description"
                                        value={eventData.description}
                                        onChange={handleInputChange}
                                        required 
                                        style={styles.textarea} 
                                        rows="4" 
                                    />
                                </div>
                            </div>

                            <div style={styles.buttonGroup}>
                                <button type="submit" style={styles.submitButton}>Create Event</button>
                                <button 
                                    type="button" 
                                    onClick={() => setShowDialog(false)} 
                                    style={styles.cancelButton}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            <div style={styles.mainContent}>
                <CategoryBox />
                <div className="upcoming-events" style={styles.upcoming}>
                    <div style={styles.sectionHeader}>
                        <h2 style={styles.sectionTitle}>UPCOMING EVENTS</h2>
                        <hr style={styles.hr}/>
                    </div>
                    <div className="event-cards" style={styles.cards}>
                        {events.length > 0 ? (
                            events.map((event, index) => (
                                <Eventcard 
                                    key={index}
                                    event={event}
                                />
                            ))
                        ) : (
                            <p style={styles.noEvents}>No events scheduled yet</p>
                        )}
                    </div>
                </div>     
            </div>        
         </div>
    );
};

const styles = {
    locations: {
        color: colorPalette.text.dark,
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
        border: `1px solid ${colorPalette.text.muted}`,
        fontSize: "13px",
        height: "35px",
        marginTop: "9px",
      },
      createButton: {
        display: 'flex',
        alignItems: 'center',
        // padding: '10px 20px',
        borderRadius: '5px',
        border: `1px solid ${colorPalette.text.muted}`,
        backgroundColor: colorPalette.primary.main,
        color: colorPalette.text.light,
        cursor: 'pointer',
        fontSize: '16px',
      },
      ticketButton: {
        display: 'flex',
        alignItems: 'center',
        // padding: '10px 20px',
        borderRadius: '5px',
        border: `1px solid ${colorPalette.text.muted}`,
        backgroundColor: colorPalette.primary.main,
        color: colorPalette.text.light,
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
        left: "35%",
        margin: "5px",
        width: "100%",
      },
      cards: {
        width: "100%",
      },
      sectionTitle: {
        margin: "0",
       },
      hr: {
        height: "1px",
        width: "70%",
        color: colorPalette.text.dark,
        backgroundImage: "linear-gradient(90deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 100%, rgba(255, 0, 0, 0) 50%)",
        border: "none",
        position: "absolute",
        margin: "0.5px",
        marginBottom: "10px",
     },
     formGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        paddingRight: '8px',
    },
    formRow: {
        display: 'flex',
        gap: '16px',
        width: '100%',
    },
    select: {
        width: '100%',
        padding: '8px',
        marginTop: '5px',
        borderRadius: '8px',
        border: `2px solid ${colorPalette.text.muted}`,
        backgroundColor: colorPalette.background.dark,
        color: colorPalette.text.light,
        fontSize: '16px',
        transition: 'border-color 0.3s ease',
        outline: 'none',
        cursor: 'pointer',
        '&:focus': {
            borderColor: colorPalette.primary.main,
        }
    },
     
    label: {
        color: colorPalette.text.light,
        fontSize: '14px',
        fontWeight: '500',
    },

     overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colorPalette.utility.overlay,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(5px)',
      overflow: 'auto',
      padding: '20px 0',
  },
  dialog: {
    backgroundColor: colorPalette.background.main,
    padding: '20px',
    borderRadius: '8px',
    width: '500px',
    maxWidth: '90%',
    boxShadow:  `0 10px 25px ${colorPalette.utility.shadow}`,
    transform: 'translateY(0)',
    animation: 'slideIn 0.3s ease-out',
    margin: 'auto',
    // maxHeight: '90vh',
    '&::-webkit-scrollbar': {
            width: '8px',
        },
        '&::-webkit-scrollbar-track': {
            background: colorPalette.background.dark,
            borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: colorPalette.primary.main,
            borderRadius: '4px',
            '&:hover': {
                background: colorPalette.primary.dark,
            },
        },
  },
  dialogTitle: {
      color: colorPalette.primary.main,
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
    border: `2px solid ${colorPalette.text.muted}`,
    backgroundColor: colorPalette.background.dark,
    color: colorPalette.text.light,
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
    border: `2px solid ${colorPalette.text.muted}`,
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    outline: 'none',
    resize: 'vertical',
    minHeight: '120px',
    backgroundColor: colorPalette.background.dark,
    color: colorPalette.text.light,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px',
    marginTop: '30px',
  },
  submitButton: {
    backgroundColor: colorPalette.primary.main,
        color: colorPalette.text.light,
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
    backgroundColor: colorPalette.background.dark,
    color: colorPalette.text.light,
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