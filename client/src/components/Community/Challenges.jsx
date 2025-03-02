import React from 'react';
import Navbar from '../Navbar';
import Category from './Category';

const Challenges = () => {


  const styles = {
    mainContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      minHeight: "calc(100vh - 65px)",
      marginTop: "65px",
      padding: "20px",
    },
  };

  return (
    <div className="container">
      <Navbar />
      <div style={styles.mainContent}>
        <aside style={styles.sidebar}>
          <Category />
        </aside>
        <h1>Challenges</h1>
      </div>
    </div>
  );
};

export default Challenges;