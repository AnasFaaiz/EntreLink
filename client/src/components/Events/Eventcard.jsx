import React, { useState, useEffect } from "react";
import colorPalette from "../colorPalette";
import PropTypes from 'prop-types';

const CountdownBox = ({ value, label }) => (
  <div style={styles.countdownBox}>
    <span style={styles.countdownNumber}>{value}</span>
    <span style={styles.countdownLabel}>{label}</span>
  </div>
);

CountdownBox.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

const Eventcard = ({ event }) => {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0 });
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isBoxHovered, setIsBoxHovered] = useState(false);
  const [isMapHovered, setIsMapHovered] = useState(false);

  useEffect(() => {
    const eventDate = new Date(event.date);
    const calculateTimeRemaining = () => {
        const currentDate = new Date();
        const timeDifference = eventDate - currentDate;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        setTimeRemaining({ days, hours, minutes });
    };

    calculateTimeRemaining();
        const interval = setInterval(calculateTimeRemaining, 1000 * 60);
        return () => clearInterval(interval);
    }, [event.date]);

 

  const formatDate = (dateString) => {
    try {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString; 
    }
  };

  return (
    <article style={styles.card}>
        <div style={styles.cardImageWrapper}>
          <img 
            src={event.imageUrl || "./images/Event1.jpg"} 
            alt={event.name} 
            style={{
              ...styles.cardImage,
              transform: isImageHovered ? 'scale(1.08)' : 'none',
              filter: isImageHovered ? 'brightness(1)' : 'brightness(0.9)',
            }}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          />
            <div style={styles.dateOverlay}>
                <span style={styles.date}>{formatDate(event.date)}</span>
            </div>
        </div>

        <div style={styles.cardContent}>
            <header style={styles.cardHeader}>
                <div style={styles.titleSection}>
                    <h3 style={styles.cardTitle}>{event.name}</h3>
                    <span style={styles.eventTime}>
                      <span role="img" aria-label="clock">🕒</span>
                      {event.startTime} - {event.endTime}
                    </span>
                </div>

                <a 
                  href="/" 
                  style={{
                    ...styles.mapLink,
                    backgroundColor: isMapHovered ? `${colorPalette.primary.light}25` : `${colorPalette.primary.light}15`,
                    transform: isMapHovered ? 'translateY(-2px)' : 'none',
                  }}
                  onMouseEnter={() => setIsMapHovered(true)}
                  onMouseLeave={() => setIsMapHovered(false)}
                >
                    <span style={styles.mapIcon}>📍</span>
                    View in Map
                </a>
            </header>
            
            <div style={styles.cardBody}>
                <p style={styles.cardDescription}>
                    {event.description}
                </p>
                
                <div style={styles.eventDetails}>
                    <span style={styles.eventType}>{event.type}</span>
                    <span style={styles.eventCategory}>{event.category}</span>
                    {event.price && (
                        <span style={styles.eventPrice}>₹{event.price}</span>
                    )}
                </div>
                
                <div style={styles.countdownSection}>
                    <CountdownBox value={timeRemaining.days} label="Days" />
                    <CountdownBox value={timeRemaining.hours} label="Hours" />
                    <CountdownBox value={timeRemaining.minutes} label="Minutes" />
                </div>
            </div>

            <footer style={styles.cardFooter}>
                <div style={styles.venueInfo}>
                    <h4 style={styles.venue}>
                        <span style={styles.venueIcon}>📌</span>
                        {event.location}
                    </h4>
                    {event.capacity && (
                        <span style={styles.capacity}>
                            Capacity: {event.capacity} people
                        </span>
                    )}
                </div>
                <button style={styles.registerButton}>Register Now</button>
            </footer>
        </div>
    </article>
);
};
  Eventcard.propTypes = {
    event: PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.string,
        capacity: PropTypes.string,
        imageUrl: PropTypes.string,
    }).isRequired,
  };


const styles = {
  card: {
    display: 'flex',
    width: '70vw',
    // height: '280px', // Slightly increased height
    maxWidth: '1000px', // Increased max-width
    margin: '16px auto',
    borderRadius: '16px',
    backgroundColor: colorPalette.background.dark,
    boxShadow: `0 12px 32px ${colorPalette.background.dark}30`,
    overflow: 'hidden',
    transition: 'all 0.4s ease',
    border: `1px solid ${colorPalette.background.dark}40`,
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `0 20px 40px ${colorPalette.background.dark}40`,
      borderColor: colorPalette.primary.light,
    },
  },
  cardImageWrapper: {
    flex: '0 0 40%', // Increased image section width
    position: 'relative',
    overflow: 'hidden',
    borderRight: `1px solid ${colorPalette.background.dark}40`,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease, filter 0.6s ease',
    filter: 'brightness(0.9)',
    '&:hover': {
      transform: 'scale(1.08)',
      filter: 'brightness(1)',
    },
  },
  dateOverlay: {
    position: 'absolute',
    top: '16px',
    left: '24px',
    background: `${colorPalette.primary.light}CC`,
    backdropFilter: 'blur(8px) brightness(0.8)',
    padding: '8px 12px',
    borderRadius: '12px',
    border: `1px solid ${colorPalette.background.dark}60`,
  },

  date: {
    color: colorPalette.text.light,
  },
  eventDetails: {
    display: 'flex',
    gap: '12px',
    marginTop: '8px',
},
eventType: {
    color: colorPalette.accent.teal,
    fontSize: '14px',
    padding: '4px 8px',
    borderRadius: '4px',
    backgroundColor: `${colorPalette.accent.teal}15`,
},
eventCategory: {
    color: colorPalette.primary.light,
    fontSize: '14px',
    padding: '4px 8px',
    borderRadius: '4px',
    backgroundColor: `${colorPalette.primary.light}15`,
},
eventPrice: {
    color: colorPalette.text.light,
    fontSize: '14px',
    padding: '4px 8px',
    borderRadius: '4px',
    backgroundColor: `${colorPalette.background.dark}`,
},
capacity: {
    color: colorPalette.text.muted,
    fontSize: '14px',
    marginLeft: '8px',
},
noEvents: {
    color: colorPalette.text.muted,
    textAlign: 'center',
    padding: '40px',
    fontSize: '16px',
},
  cardContent: {
    flex: '1',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    backgroundColor: `${colorPalette.background.dark}`,
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '16px',
  },
  titleSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: colorPalette.text.light,
    margin: 0,
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
  },
  eventTime: {
    fontSize: '14px',
    color: colorPalette.text.muted,
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    '&::before': {
      content: '"🕒"',
    },
  },
  mapLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: colorPalette.primary.light,
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '12px',
    backgroundColor: `${colorPalette.primary.light}15`,
    transition: 'all 0.3s ease',
    border: `1px solid ${colorPalette.primary.light}30`,
    '&:hover': {
      backgroundColor: `${colorPalette.primary.light}25`,
      transform: 'translateY(-2px)',
    },
  },
  cardDescription: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: colorPalette.text.muted,
    margin: '0',
  },
  countdownSection: {
    display: 'flex',
    gap: '16px',
    marginTop: '8px',
  },
  countdownBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 12px',
    borderRadius: '12px',
    backgroundColor: `#00a3a315`,
    border: `1px solid ${colorPalette.background.dark}60`,
    minWidth: '80px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: `${colorPalette.background.dark}70`,
      transform: 'translateY(-2px)',
    },
  },
  countdownNumber: {
    fontSize: '24px',
    fontWeight: '700',
    color: colorPalette.primary.light,
    letterSpacing: '-0.02em',
  },
  countdownLabel: {
    fontSize: '12px',
    color: colorPalette.text.muted,
    marginTop: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  cardFooter: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: `1px solid ${colorPalette.background.dark}30`,
  },
  venue: {
    margin: 0,
    fontSize: '14px',
    color: colorPalette.text.light,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  registerButton: {
    padding: '10px 24px',
    borderRadius: '12px',
    backgroundColor: colorPalette.accent.green,
    color: colorPalette.text.light,
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: '0.02em',
    '&:hover': {
      backgroundColor: colorPalette.primary.main,
      transform: 'translateY(-2px)',
      boxShadow: `0 8px 20px ${colorPalette.primary.main}30`,
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
};

export default Eventcard;