import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


const NewsCard = ({ image, title, content, source, date }) => {

  return (
    <div style={styles.newsCard}>
    <img src={image} alt={title} style={styles.cardImage} />
    <div style={styles.cardHeader}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={{...styles.cardDate, width: '30%'}}>{date}</p>
    </div>
      <p style={styles.cardContent}>{content}</p>
    <div style={styles.footerSection}>
      <Link to="/news-details" style={styles.readMoreLink}>Read More</Link>
      <p style={styles.cardSource}>Source: {source}</p>
    </div>
  </div>
  );
};

const PostCard = ({ image, title, content, date, author }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div style={styles.postCard}>
      <img src={image} alt={title} style={styles.cardImage} />
      <div style={styles.cardHeader}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardMeta}>
          <span>{date}</span> | <span>{author}</span>
      </p>
      </div>
      <p style={styles.cardContent}>{content}</p>
      <div style={styles.footerSection}>
        <Link to="/post-details" style={styles.readMoreLink}>Read More</Link>
        <div style={styles.likeDislikeContainer}> 
            <button style={styles.likeButton} onClick={handleLike}>
              <SentimentVerySatisfiedIcon /> ({likes})
            </button>
            <hr />
            <button style={styles.dislikeButton} onClick={handleDislike}>
              <SentimentVeryDissatisfiedIcon /> ({dislikes})
            </button>
        </div>
      </div>
    </div>
  );
};

const DiscoverComponent = () => {
    const [newsIndex, setNewsIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(0);

  const news = [
    { image: "./images/Event1.jpg", title: "News 1", content: "This is the content of news 1.", date: "01-02-2025", source: "BBC News", },
    { image: "./images/Event2.jpg", title: "News 2", content: "This is the content of news 2.", date: "01-02-2025", source: "ABC News",},
    { image: "./images/Event3.png", title: "News 3", content: "This is the content of news 3.", date: "01-02-2025", source: "DEF News",},
  ];

  const posts = [
    { image: "./images/Event1.jpg", title: "This is Title area for Post 1", content: "This is the content of post 1.", date: "01-02-2025", author: "John Doe" },
    { image: "./images/Event2.jpg", title: "Post 2", content: "This is the content of post 2.", date: "01-02-2025", author: "Emma Watson" },
    { image: "./images/Event3.png", title: "Post 3", content: "This is the content of post 3.", date: "01-02-2025", author: "Alex Johnson" },
  ];
  useEffect(() => {
    const newsInterval = setInterval(() => {
      setNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 30000);

    const postInterval = setInterval(() => {
      setPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 30000); 

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
      <fieldset className="Latest-News" style={styles.NewsContainer}>
        <legend className="Tites" style={styles.title}>Latest News</legend>
        {/* <Link to="/EntreLink/News" style={styles.linking}>View More</Link> */}
        <button style={{ ...styles.arrowButton, ...styles.leftArrow }} onClick={handlePrevNews}>
          &#9664;
        </button>
        <div>
          <NewsCard
            image={news[newsIndex].image}
            title={news[newsIndex].title}
            content={news[newsIndex].content}
            date={news[newsIndex].date}
            source={news[newsIndex].source}
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
      </fieldset>

      <fieldset className="Posts-container" style={styles.PostContainer}>
        <legend className="Tites" style={styles.title}>Latest Posts</legend>
        {/* <Link to="/EntreLink/Discover" style={styles.linking}>View More</Link> */}
        <button style={{ ...styles.arrowButton, ...styles.leftArrow }} onClick={handlePrevPost}>
          &#9664;
        </button>
        <div>
          <PostCard
            image={posts[postIndex].image}
            title={posts[postIndex].title}
            content={posts[postIndex].content}
            date={posts[postIndex].date}
            author={posts[postIndex].author}
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
      </fieldset>
    </div>
  );
};

const styles = {
  MainContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    position: 'relative',
    top: '10vh',
    gap: '50px',
    color: '#0056B3',
  },
  NewsContainer: {
    width: '35vw',
    border: '3px solid black',
    borderRadius: '20px',
    backgroundColor: 'transparent',
    // boxShadow: '2px 2px 5px grey',
    padding: '10px',
    position: 'relative',
  },
  PostContainer: {
    width: '35vw',
    border: '3px solid black',
    borderRadius: '20px',
    backgroundColor: 'transparent',
    // boxShadow: '2px 2px 5px grey',
    padding: '10px',
    position: 'relative',
  },
  title: {
    fontSize: '2rem',
    textAlign: 'start',
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
  newsCard: {
    border: '1px solid black',
    borderRadius: '10px',
    backgroundColor: 'lightblue',
    boxShadow: '1px 1px 3px grey',
    padding: '30px',
    margin: '10px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '75%',
    // height: '60vh', // Set a fixed height for the news card
    maxWidth: '400px',
  },
  postCard: {
    border: '1px solid black',
    borderRadius: '10px',
    backgroundColor: 'lightblue',
    boxShadow: '1px 1px 3px grey',
    padding: '30px',
    margin: '10px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '75%',
    // height: '400px', // Set a fixed height for the post card
    maxWidth: '400px',
  },
  cardImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  cardHeader: {
    width: '100%',
    textAlign: 'left',
    display: 'flex',
  },
  cardTitle: {
    fontSize: '1.5vw',
    margin: '10px 0',
    display: 'flex',
    width: '100%',
  },
  cardContent: {
    fontSize: '1vw',
    textAlign: 'start',
    margin: '10px 0',
    width: '100%',
  },
  cardMeta: {
    fontSize: '0.8vw',
    color: 'grey',
    display: 'block',
    width: '20%',
  },
  footerSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  readMoreLink: {
    fontSize: '1vw',
    color: 'blue',
    textDecoration: 'underline',
    marginTop: '25px',
  },
  likeDislikeContainer: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '50px',
    // marginTop: '10px',
    border: '2px solid black',
    padding: '5px',
    width: '40%',
  },
  likeButton: {
    backgroundColor: 'transparent',
    color: 'darkgreen',
    padding: '0',
    cursor: 'pointer',
    borderRadius: '50px',
    border: 'none',
  },
  dislikeButton: {
    backgroundColor: 'transparent',
    color: 'darkred',
    padding: '0',
    cursor: 'pointer',
    borderRadius: '50px',
    border: 'none',
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'transparent',
    color: 'black',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftArrow: {
    left: '5px',
  },
  rightArrow: {
    right: '5px',
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
};


export default DiscoverComponent;