import React from "react";

// filepath: /d:/00-Projects/EntreLink-1/client/src/components/Events/Eventcard.jsx
const Eventcard = () => {
    return (
        <div className="cardContainer" style={styles.cardContainer}>
            <div className="card" style={styles.card}>
                <img src="./images/Event1.jpg" alt="Event1" style={styles.cardImage} />
                <div className="cardContent" style={styles.cardContent}>
                    <h3 style={styles.cardTitle}>Event1</h3>
                    <p style={styles.cardDescription}>Event1 Description</p>
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
        // padding: "20px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        left: "1%",
    },
    cardTitle: {
        margin: "0 0 10px 0",
        fontSize: "24px",
        fontWeight: "bold",
    },
    cardDescription: {
        margin: "0",
        fontSize: "16px",
    },
};

export default Eventcard;