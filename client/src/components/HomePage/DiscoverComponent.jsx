import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, content }) => (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.cardImage} />
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardContent}>{content}</p>
    </div>
  );
  

const DiscoverComponent = () => {
    const [newsIndex, setNewsIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(0);

  const news = [
    { image: "./images/Event1.jpg", title: "News 1", content: "This is the content of news 1." },
    { image: "./images/Event2.jpg", title: "News 2", content: "This is the content of news 2." },
    { image: "./images/Event3.png", title: "News 3", content: "This is the content of news 3." },
  ];

  const posts = [
    { image: "./images/Event1.jpg", title: "Post 1", content: "This is the content of post 1." },
    { image: "./images/Event2.jpg", title: "Post 2", content: "This is the content of post 2." },
    { image: "./images/Event3.png", title: "Post 3", content: "This is the content of post 3." },
  ];
  useEffect(() => {
    const newsInterval = setInterval(() => {
      setNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 30000); // Change slide every 3 seconds

    const postInterval = setInterval(() => {
      setPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 30000); // Change slide every 3 seconds

    return () => {
      clearInterval(newsInterval);
      clearInterval(postInterval);
    };
  }, [news.length, posts.length]);

  const handlePrevNews = () => {
    setNewsIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length);
  };

  const handleNextNews = () => {
    setNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
  };

  const handlePrevPost = () => {
    setPostIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  };

  const handleNextPost = () => {
    setPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  return (
    <div className="discover-container" style={styles.MainContainer}>
      <div className="Latest-News" style={styles.NewsContainer}>
        <div className="Tites" style={styles.title}>
          <h2 style={styles.heading}>Trending News</h2>
          <Link to="/EntreLink/News" style={styles.linking}>View More</Link>
        </div>
        <button style={{ ...styles.arrowButton, ...styles.leftArrow }} onClick={handlePrevNews}>
          &#9664;
        </button>
        <div>
          <Card
            image={news[newsIndex].image}
            title={news[newsIndex].title}
            content={news[newsIndex].content}
          />
        </div>
        <button style={{ ...styles.arrowButton, ...styles.rightArrow }} onClick={handleNextNews}>
          &#9654;
        </button>
        <div style={styles.indicators}>
          {news.map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.indicator,
                ...(index === newsIndex ? styles.activeIndicator : {}),
              }}
              onClick={() => setNewsIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="Posts-container" style={styles.PostContainer}>
        <div className="Tites" style={styles.title}>
          <h2 style={styles.heading}>Trending Posts</h2>
          <Link to="/EntreLink/Discover" style={styles.linking}>View More</Link>
        </div>
        <button style={{ ...styles.arrowButton, ...styles.leftArrow }} onClick={handlePrevPost}>
          &#9664;
        </button>
        <div>
          <Card
            image={posts[postIndex].image}
            title={posts[postIndex].title}
            content={posts[postIndex].content}
          />
        </div>
        <button style={{ ...styles.arrowButton, ...styles.rightArrow }} onClick={handleNextPost}>
          &#9654;
        </button>
        <div style={styles.indicators}>
          {posts.map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.indicator,
                ...(index === postIndex ? styles.activeIndicator : {}),
              }}
              onClick={() => setPostIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
    MainContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      position: 'relative',
      top: '10vh',
    },
    NewsContainer: {
      width: '45vw',
      border: '1px solid black',
      borderRadius: '20px',
      backgroundColor: 'white',
      boxShadow: '2px 2px 5px grey',
      padding: '20px',
      position: 'relative',
    },
    PostContainer: {
      width: '45vw',
      border: '1px solid black',
      borderRadius: '20px',
      backgroundColor: 'white',
      boxShadow: '2px 2px 5px grey',
      padding: '20px',
      position: 'relative',
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
      margin: '0',
    },
    linking: {
      marginRight: 'auto',
      fontSize: '1.5vw',
    },
    card: {
      border: '1px solid black',
      borderRadius: '10px',
      backgroundColor: 'white',
      boxShadow: '1px 1px 3px grey',
      padding: '10px',
      margin: '10px auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '80%',
    },
    cardImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
    },
    cardTitle: {
      fontSize: '1.5vw',
      margin: '10px 0',
    },
    cardContent: {
      fontSize: '1vw',
      textAlign: 'center',
    },
    arrowButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      cursor: 'pointer',
    },
    leftArrow: {
      left: '10px',
    },
    rightArrow: {
      right: '10px',
    },
    indicators: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
    },
    indicator: {
      height: '10px',
      width: '10px',
      backgroundColor: 'grey',
      borderRadius: '50%',
      margin: '0 5px',
      cursor: 'pointer',
    },
    activeIndicator: {
      backgroundColor: 'black',
    },
  }; // <-- Closing curly brace for styles object
  

export default DiscoverComponent;