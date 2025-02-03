import React, { useState } from 'react';

const startupFields = [
  "Fintech", "Healthtech", "Edtech", "E-commerce", "SaaS", "Biotech", 
  "Cleantech", "Foodtech", "Agtech", "Proptech", "Traveltech", 
  "AI & Machine Learning", "Blockchain", "Cybersecurity", 
  "Media & Entertainment", "Gaming", 
  "Automotive",
];

const entrepreneurEvents = [
  "Startup Pitch", "Networking", "Tech Expos", "Funding Rounds", 
  "Mentorship Sessions", "Investor Meetings", 
  "Product Launches", "Business Competitions",
  "Pitch Competitions", "Incubator Programs", "Founder Meetups", 
  "Leadership Summits", "Market Research Workshops", 
  "Customer Discovery Sessions", "Legal and Compliance Workshops", 
  "Marketing and Branding Workshops"
];

const locations = ['Hyderabad','Bangalore', 'Chennai', 'Delhi','Mumbai', 'Pune', 'Punjab'];

const CategoryBox = () => {
  const [showStartupFields, setShowStartupFields] = useState(false);
  const [showEntrepreneurEvents, setShowEntrepreneurEvents] = useState(false);

  return (
    <div style={styles.categoryBox}>
      <div style={styles.section}>
        <ul style={{ ...styles.list, display:"flex",gap:"15px" }}>
          <li style={styles.listItem}>
            <input type="checkbox" id="online" name="online" style={styles.checkbox} />
            <label htmlFor="online" style={styles.label}>Online</label>
          </li>
          <li style={styles.listItem}>
            <input type="checkbox" id="offline" name="offline" style={styles.checkbox} />
            <label htmlFor="offline" style={styles.label}>Offline</label>
          </li>
        </ul>
      </div>

      <hr style={styles.hr} />
      <div style={styles.section}>
        <h4 style={styles.subHeading}>
          Startup Fields
          <button 
            style={styles.toggleButton} 
            onClick={() => setShowStartupFields(!showStartupFields)}
          >
            {showStartupFields ? '-' : '+'}
          </button>
        </h4>
        {showStartupFields && (
          <ul style={styles.list}>
            {startupFields.map(field => (
              <li style={styles.listItem} key={field}>
                <input type="checkbox" id={field.toLowerCase().replace(/ /g, "_")} name={field.toLowerCase().replace(/ /g, "_")} style={styles.checkbox} />
                <label htmlFor={field.toLowerCase().replace(/ /g, "_")} style={styles.label}>{field}</label>
              </li>
            ))}
          </ul>
        )}
      </div>
      <hr style={styles.hr} />
      <div style={styles.section}>
        <h4 style={styles.subHeading}>
          Entrepreneur Events
          <button 
            style={styles.toggleButton} 
            onClick={() => setShowEntrepreneurEvents(!showEntrepreneurEvents)}
          >
            {showEntrepreneurEvents ? '-' : '+'}
          </button>
        </h4>
        {showEntrepreneurEvents && (
          <ul style={styles.list}>
            {entrepreneurEvents.map(event => (
              <li style={styles.listItem} key={event}>
                <input type="checkbox" id={event.toLowerCase().replace(/ /g, "_")} name={event.toLowerCase().replace(/ /g, "_")} style={styles.checkbox} />
                <label htmlFor={event.toLowerCase().replace(/ /g, "_")} style={styles.label}>{event}</label>
              </li>
            ))}
          </ul>
        )}
      </div>
      <hr style={styles.hr} />
      <div style={styles.section}>
        <h4 style={styles.subHeading}>Locations</h4>
        <ul style={styles.list}>
          {locations.map(location => (
            <li style={styles.listItem} key={location}>
              <input type="checkbox" id={location.toLowerCase()} name={location.toLowerCase()} style={styles.checkbox} />
              <label htmlFor={location.toLowerCase()} style={styles.label}>{location}</label>
            </li>
          ))}
        </ul>
      </div>
      <hr style={styles.hr} />
    </div>
  );
};

const styles = {
  categoryBox: {
    padding: "15px",
    backgroundColor: "#1E1E1E",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "250px",
    margin: "auto 10px 20px",
    textAlign: "center",
    height: "fit-content",
    top: "90vh",
    position: "absolute",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "16px",
    margin: "10px",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#E0E0E0",
  },
  section: {
    // marginBottom: "20px"
  },
  list: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
    textAlign: "left",
    width: "100%",
    color: "#004F4F",
  },
  listItem: {
    fontSize: "16px",
    margin: "5px 0",
    display: "flex",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "10px",
    width: "20%",
  },
  label: {
    width: "100%",
  },
  toggleButton: {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: "white",
    padding: "5px",
  },
  hr: {
    height: "1px",
    color: "black",
    backgroundImage: "linear-gradient(90deg, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1) 50%, rgba(255, 0, 0, 0) 100%)",
    border: "none",
 },
 iconButton: {
  marginLeft: "30px",
  padding: "2px 5px",
  fontSize: "20px",
  backgroundColor: "black",
},
};

export default CategoryBox;