import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const News = () => {
    const navigate = useNavigate();

    const gotoDiscover = () => {
        navigate('/EntreLink/Discover');
      };
    
    const gotoNews = () => {
       navigate('/EntreLink/News');
    };

    const styles = {
        buttons: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #064541',
            borderRadius: '5px',
            width: '18vw',
            position: 'absolute',
            top: '10%',
            left: '5%',
            gap: '10px',
          },
          buttondetail: {
            backgroundColor: "transparent",
            border: "none",
            color: "#064541",
            padding: '12px',
          },
          hr: {
            height: '30px',
            padding: '0',
            margin: '0',
            border: '0.5px solid #064541',
          }
    }
    return (
        <div className='News-Container'>
            <Navbar />
            <div className="buttons" style={styles.buttons}>
                <button style={styles.buttondetail} onClick={gotoNews}>News</button>
                <hr style={styles.hr}/>
                <button style={styles.buttondetail} onClick={gotoDiscover}>Discover</button>
            </div>
        </div>
    );
};

export default News;