import React from 'react';
import Navbar from "../Navbar";
import DiscoverComponent from './DiscoverComponent';
import './herosection.css'

const HomePage = () => {
  return (
    <div className='main-page'>
      <Navbar />
      <div className="main-content" style={styles.mainContent}>
        <div className="hero-section">
          <div className="bubble bubble1"></div>
          <div className="bubble bubble2"></div>
          <div className="bubble bubble3"></div>
          <div className="bubble bubble4"></div>
          <div className="bubble bubble5"></div>
          <div className="hero-text">
            <h1>Entrepreneur Mindset Requirements</h1>
            <p>Risk, Vision, Commitment, Innovation, etc.</p>
          </div>
        </div>
        <DiscoverComponent />
        <div className="PartnerSection" style={styles.sponser}>
          <h2 style={styles.Title}>Our Trusted Partners</h2>
          <div className="PartnerLogos" style={styles.sponserLogos}>
            <img src="./images/KLogo.png" alt="partner1" style={styles.logoImage} />
            <img src="./images/KLogo.png" alt="partner2" style={styles.logoImage} />
            <img src="./images/KLogo.png" alt="partner3" style={styles.logoImage} />
            <img src="./images/KLogo.png" alt="partner4" style={styles.logoImage} />
          </div>
        </div>
        <div className="SponsorSection" style={styles.sponser}>
          <h2 style={styles.Title}>Our Sponsors</h2>
          <div className="sponser-logos" style={styles.sponserLogos}>
            <img src="./images/KLogo.png" alt="sponsor1" style={styles.logoImage} />
            <img src="./images/KLogo.png" alt="sponsor2" style={styles.logoImage}/>
          </div>
        </div>
        <div className="FooterSection" style={styles.footer}>
          <h2>Footer</h2>
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContent: {
    display: 'block',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
  },
  Title: {
    fontSize: '24',
    textAlign: 'center',
    margin: '5%',
  },
  sponser: {
    position: 'relative',
    top: '5%',
  },
  sponserLogos: {
    display: 'flex',
    height: '10vh',
    width: '100%',
    justifyContent: 'Space-around',
    alignItems: 'center',
  },
  logoImage: {
    height: '10vh',
    width: 'auto',
    padding: '3%',
    border: '1px solid transparent ',
    borderRadius: '10px',
    backgroundColor: 'rgba(245, 245, 245, 0.27)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    background: 'black',
    color: 'white',
    position: 'relative',
    top: '10%',
  },
};

export default HomePage;