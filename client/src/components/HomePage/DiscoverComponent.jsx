import React from "react";
import { Link } from "react-router-dom";

const DiscoverComponent = () => {
    return (
        <div className="discover-container" style={styles.MainContainer}>
            <div className="Latest-News" style={styles.NewsContainer}>
                <div className="Tites" style={styles.title}>
                    <h2 style={styles.heading}>Latest News</h2>
                    <Link to="/EntreLink/News" style={styles.linking}>View More</Link>
                </div>
            </div>
            <div className="Posts-container" style={styles.PostContainer}>
                <div className="Tites" style={styles.title}>
                    <h2 style={styles.heading}>Trending Posts</h2>
                    <Link to="/EntreLink/Discover" style={styles.linking}>View More</Link>
                </div>
            </div>
        </div>
    );
};
const styles = {
    MainContainer: {
        display: 'flex',
        position: 'relative',
        width: '100vw',
        height: '70vh',
        top: '10vh',
        justifyContent: 'center',
        gap: '2vw',
        marginTop: '5vh',
        marginBottom: '10vh',
        
    },
    NewsContainer: {
        width: '45vw',
        border: '1px solid black',
        borderRadius: '20px',
        backgroundColor: 'white',
        boxShadow: '5px 5px 5px 5px grey',
    },
    PostContainer: {
        width: '45vw',
        border: '1px solid black',
        borderRadius: '20px',
        backgroundColor: 'white',
        boxShadow: '5px 5px 5px 5px grey',
    },
    title: {
        fontSize: '2vw',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '-1vh',
    },
    heading: {
        textAlign: 'center',
        fontSize: '2vw',
        flex: '1',
    },
    linking: {
        position: 'relative',
        right: '2%',
        fontSize: '1.2vw',
        top: '-2vh',
        
    },
};
export default DiscoverComponent;