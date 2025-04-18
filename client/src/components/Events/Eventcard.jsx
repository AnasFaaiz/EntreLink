import React, { useState, useEffect } from "react";
import colorPalette from "../colorPalette";
// filepath: /d:/00-Projects/EntreLink-1/client/src/components/Events/Eventcard.jsx
const Eventcard = () => {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0 });

  useEffect(() => {
    const eventDate = new Date("2025-03-31");
    const calculateTimeRemaining = () => {
      const currentDate = new Date();
      const timeDifference = eventDate - currentDate;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setTimeRemaining({ days, hours });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cardContainer" style={styles.cardContainer}>
      <div className="card" style={styles.card}>
        <img src="./images/Event1.jpg" alt="Event1" style={styles.cardImage} />
        <div className="cardContent" style={styles.cardContent}>
          <div style={styles.header}>
            <h3 style={styles.cardTitle}>Conference of Unsupervised Learning</h3>
            <a href="/" style={styles.maps}>View in Map</a>
          </div>
          <div style={styles.descriptionAndCountdown}>
            <p style={styles.cardDescription}>Event1 Description. This for example of how the event card is gonna look like. Give your feedback on how the card is looking.</p>
            <div style={styles.countdownContainer}>
              <div style={styles.countdownBox}>
                <span style={styles.countdownNumber}>{timeRemaining.days}</span>
                <span style={styles.countdownLabel}>Days</span>
              </div>
              <div style={styles.countdownBox}>
                <span style={styles.countdownNumber}>{timeRemaining.hours}</span>
                <span style={styles.countdownLabel}>Hours</span>
              </div>
              <div style={styles.countdownBox}>
                <span style={styles.countdownNumber}>{timeRemaining.hours}</span>
                <span style={styles.countdownLabel}>Hours</span>
              </div>
            </div>
          </div>
          <div className="address-registerButton" style={styles.addressRegisterButton}>
            <h4 style={styles.venue}>Venue: Draper House, gachibowli, Hyderabad</h4>
            <button style={styles.registerButton}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    width: "95%",
    margin: "5px",
    marginBottom: "10px",
    border: colorPalette.background.dark,
    borderRadius: "10px",
    backgroundColor: colorPalette.background.main,
    display: "fixed",
    position: "relative",
    // left: "24%",
    top: "3vh",
  },
  card: {
    display: "flex",
    width: "100%",
    border: `1px solid ${colorPalette.text.dark}`,
    borderRadius: "10px",
    backgroundColor: colorPalette.background.section,
    overflow: "hidden",
    padding: '15px',
  },
  cardImage: {
    width: "30%",
    height: "auto",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    left: "1%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0",
    width: "100%",
    color: colorPalette.text.light,
  },
  descriptionAndCountdown: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    heigth: "100%",
  },
  cardDescription: {
    margin: "0",
    fontSize: "16px",
    flex: "1",
    width: "35vw",
    color: colorPalette.text.muted,
  },
  countdownContainer: {
    display: "flex",
    gap: "10px",
    
  },
  countdownBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5px",
    border: `1px solid ${colorPalette.text.dark}`,
    borderRadius: "5px",
    backgroundColor: colorPalette.background.dark,
  },
  countdownNumber: {
    fontSize: "20px",
    fontWeight: "bold",
    color: colorPalette.text.light,
  },
  countdownLabel: {
    fontSize: "12px",
    color: colorPalette.text.muted,
  },
  maps: {
    fontSize: "14px",
    color: colorPalette.primary.light,
    textDecoration: "none",
    position: "absolute",
    right: "0",
    marginTop: "5px",
  },
  venue: {
    margin: "0",
    padding: "0",
    width: "70%",
    color: colorPalette.text.light,
  },
  addressRegisterButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  registerButton: {
    padding: "5px",
    borderRadius: "5px",
    backgroundColor: colorPalette.accent.green,
    color: colorPalette.text.light,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    '&:hover': {
      backgroundColor: colorPalette.primary.main,
    }
  },
};

export default Eventcard;