import React, { useState, useEffect } from "react";

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
            <h3 style={styles.cardTitle}>Event1</h3>
            <a href="/" style={styles.maps}>View in Map</a>
          </div>
          <div style={styles.descriptionAndCountdown}>
            <p style={styles.cardDescription}>Event1 Description. This for example of how the event card is gonna look like</p>
            <div style={styles.countdownContainer}>
              <div style={styles.countdownBox}>
                <span style={styles.countdownNumber}>{timeRemaining.days}</span>
                <span style={styles.countdownLabel}>Days</span>
              </div>
              <div style={styles.countdownBox}>
                <span style={styles.countdownNumber}>{timeRemaining.hours}</span>
                <span style={styles.countdownLabel}>Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    width: "70%",
    margin: "5px",
    marginBottom: "10px",
    border: "1px solid black",
    borderRadius: "10px",
    backgroundColor: "white",
    display: "fixed",
    position: "relative",
    left: "24%",
    top: "83vh",
  },
  card: {
    display: "flex",
    width: "100%",
    border: "1px solid black",
    borderRadius: "10px",
    backgroundColor: "white",
    overflow: "hidden",
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
    alignItems: "center",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  descriptionAndCountdown: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardDescription: {
    margin: "0",
    fontSize: "16px",
    flex: "1",
  },
  countdownContainer: {
    display: "flex",
    gap: "10px",
    marginLeft: "20px",
  },
  countdownBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "#f0f0f0",
  },
  countdownNumber: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  countdownLabel: {
    fontSize: "12px",
  },
  maps: {
    fontSize: "14px",
    color: "blue",
    textDecoration: "none",
    position: "absolute",
    right: "0",
  },
};

export default Eventcard;