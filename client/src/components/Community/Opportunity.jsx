import React from 'react';
import Navbar from '../Navbar';
import Category from './Category';
import JobsList from './Opportunity/JobsList';


function Opportunity(){

  return (
    <main className="container">
      <nav>
        <Navbar />
      </nav>
      <section style={styles.mainContent}>
        <section className="Left-Side" style={styles.Leftside}>
          <aside style={styles.sidebar}>
            <Category />
          </aside>
        </section>
        <section className="Right-Side" style={styles.Rightside}>
          <JobsList />
        </section>
        
      </section>
    </main>
  );
};

const styles = {
  mainContent: {
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    position: "relative",
    minHeight: "calc(100vh - 65px)",
    marginTop: "65px",
    padding: "20px",
    gap: '10px',
  },
  Leftside: {
    display: "flex",
  },
  Rightside: {
    display: "flex",
  }

};

export default Opportunity;