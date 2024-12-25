import React from 'react';

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

const CategoryBox = () => {
  return (
    <div style={styles.categoryBox}>
      <div style={styles.section}>
        <h4 style={styles.subHeading}>Startup Fields</h4>
        <ul style={styles.list}>
          {startupFields.map(field => (
            <li style={styles.listItem} key={field}>
              <input type="checkbox" id={field.toLowerCase().replace(/ /g, "_")} name={field.toLowerCase().replace(/ /g, "_")} style={styles.checkbox} />
              <label htmlFor={field.toLowerCase().replace(/ /g, "_")} style={styles.label}>{field}</label>
            </li>
          ))}
        </ul>
      </div>
      
      <div style={styles.section}>
        <h4 style={styles.subHeading}>Entrepreneur Events</h4>
        <ul style={styles.list}>
          {entrepreneurEvents.map(event => (
            <li style={styles.listItem} key={event}>
              <input type="checkbox" id={event.toLowerCase().replace(/ /g, "_")} name={event.toLowerCase().replace(/ /g, "_")} style={styles.checkbox} />
              <label htmlFor={event.toLowerCase().replace(/ /g, "_")} style={styles.label}>{event}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  categoryBox: {
    padding: "15px",
    backgroundColor: "#66b2b2",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "250px",
    margin: "112px 10px 20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",

  },
  subHeading: {
    fontSize: "20px",
    marginBottom: "10px",
    textAlign: "left",
    marginTop: "5px",
  },
  section: {
    marginBottom: "20px"
  },
  list: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
    textAlign: "left",
    width: "100%",
  },
  listItem: {
    fontSize: "16px",
    margin: "5px 0",
    display: "flex",
    alignItems: "center",
    // width: "50%",
  },
  checkbox: {
    width: "20%",
    left: "0",
    marginRight: "10px",
  },
  label: {
    width: "100%",
  }
};

export default CategoryBox;