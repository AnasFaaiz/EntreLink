import React from 'react';
import Navbar from '../Navbar';
import Category from './Category';

const Discussion = () => {
  return (
    <div className="container">
      <Navbar />
      <div style={styles.mainContent}>
        <div style={styles.layout}>
          <aside style={styles.sidebar}>
            <Category />
          </aside>
          <main style={styles.content}>
            <h1 style={styles.heading}>Discussions</h1>
          </main>
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContent: {
    display: "flex",
    position: "relative",
    minHeight: "calc(100vh - 65px)",
    marginTop: "65px",
    padding: "20px",
  },
  layout: {
    display: "flex",
    width: "100%",
    gap: "15px",
  },
  sidebar: {
    width: "23vw",
    flexShrink: 0,
  },
  content: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    padding: "20px",
    width: "68vw",
  },
  heading: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "20px",
    margin: "0",
  }
};

export default Discussion;