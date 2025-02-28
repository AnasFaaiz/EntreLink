import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


const MainNewsCard = ({ image, title, content, source, date }) => {
  return (
    <div style={styles.mainNewsCard}>
      <img src={image} alt={title} style={styles.mainCardImage} />
      <div style={styles.mainCardContent}>
          <h2 style={styles.mainCardTitle}>{title}</h2>
          <p style={{...styles.cardDate,}}>{date}</p>
        <p style={styles.mainCardText}>{content}</p>
        <div style={styles.footerSection}>
          <Link to="/news-details" style={styles.readMoreLink}>Read More</Link>
          <p style={styles.cardSource}>Source: {source}</p>
        </div>
      </div>
    </div>
  );
};

const SubNewsCard = ({ image, title, date, source }) => {
  return (
    <div style={styles.subNewsCard}>
      <img src={image} alt={title} style={styles.subCardImage} />
      <div style={styles.subCardContent}>
        <h4 style={styles.subCardTitle}>{title}</h4>
        <p style={styles.subCardMeta}>{date} | {source}</p>
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
      <div style={styles.cardContent}>
          <h3 style={styles.cardTitle}>{title}</h3>
          <p style={styles.cardMeta}><span>{date}</span> | <span>{author}</span></p>
        <div style={styles.footerSection}>
          <div style={styles.likeDislikeContainer}> 
              <button style={styles.likeButton} onClick={handleLike}>
                <SentimentVerySatisfiedIcon /> 
              </button>
              <hr style={{margin: '5px'}}/>
              <button style={styles.dislikeButton} onClick={handleDislike}>
                <SentimentVeryDissatisfiedIcon /> 
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DiscoverComponent = () => {
    const [newsIndex, setNewsIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(0);

  const news = [
    {
      image: "./images/Event1.jpg",
      title: "Breaking News: Major Tech Innovation Breakthrough",
      content: "A revolutionary advancement in technology has been announced today, promising to transform the way we interact with digital systems...",
      date: "01-02-2025",
      source: "BBC News",
    },
  ];

  const subNews = [
    {
      image: "./images/Event2.jpg",
      title: "Startup Success Story: Local Company Goes Global",
      date: "01-02-2025",
      source: "ABC News",
    },
    {
      image: "./images/Event3.png",
      title: "New Investment Opportunities in Tech Sector",
      date: "01-02-2025",
      source: "DEF News",
    },
    {
      image: "./images/Event1.jpg",
      title: "Emerging Markets Show Promise for Entrepreneurs",
      date: "01-02-2025",
      source: "XYZ News",
    },
    {
      image: "./images/Event1.jpg",
      title: "Emerging Markets Show Promise for Entrepreneurs",
      date: "01-02-2025",
      source: "XYZ News",
    },
    {
      image: "./images/Event1.jpg",
      title: "Emerging Markets Show Promise for Entrepreneurs",
      date: "01-02-2025",
      source: "XYZ News",
    },
    {
      image: "./images/Event1.jpg",
      title: "Emerging Markets Show Promise for Entrepreneurs",
      date: "01-02-2025",
      source: "XYZ News",
    },
    {
      image: "./images/Event1.jpg",
      title: "Emerging Markets Show Promise for Entrepreneurs",
      date: "01-02-2025",
      source: "XYZ News",
    },
    {
      image: "./images/Event1.jpg",
      title: "Emerging Markets Show Promise for Entrepreneurs",
      date: "01-02-2025",
      source: "XYZ News",
    },
  ];

  const posts = [
    { image: "./images/Event1.jpg", 
      title: "This is Title area for Post 1", 
      content: "This is the content of post 1.", 
      date: "01-02-2025", 
      author: "John Doe" 
    },
    { image: "./images/Event2.jpg", 
      title: "Post 2", 
      content: "This is the content of post 2.", 
      date: "01-02-2025", 
      author: "Emma Watson" 
    },
    { image: "./images/Event3.png", 
      title: "Post 3", 
      content: "This is the content of post 3.", 
      date: "01-02-2025", 
      author: "Alex Johnson" 
    },
    { image: "./images/Event3.png", 
      title: "Post 3", 
      content: "This is the content of post 3.", 
      date: "01-02-2025", 
      author: "Alex Johnson" 
    },
    { image: "./images/Event3.png", 
      title: "Post 3", 
      content: "This is the content of post 3.", 
      date: "01-02-2025", 
      author: "Alex Johnson" 
    },
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
        <div style={styles.newsGrid}>
          <div style={styles.mainNewsSection}>
            <MainNewsCard {...news[newsIndex]} />
          </div>
          <div style={styles.subNewsSection}>
            {subNews.map((news, index) => (
              <SubNewsCard key={index} {...news} />
            ))}
          </div>
        </div>
      </fieldset>

      <fieldset className="Posts-container" style={styles.PostContainer}>
        <legend className="Tites" style={styles.title}>Latest Posts</legend>
        <button style={{ ...styles.arrowButton, ...styles.leftArrow }} onClick={handlePrevPost}>
          &#9664;
        </button>
        <div style={styles.postsWrapper}>
          {posts.map((post, index) => (
            <PostCard
              key={index}
              image={post.image}
              title={post.title}
              content={post.content}
              date={post.date}
              author={post.author}
            />
          ))}
        </div>
        <button style={{ ...styles.arrowButton, ...styles.rightArrow }} onClick={handleNextPost}>
          &#9654;
        </button>
      </fieldset>
    </div>
  );
};

const styles = {
  MainContainer: {
    padding: '20px',
    position: 'relative',
    top: '10vh',
    color: '#0056B3',
  },
  NewsContainer: {
    width: '93vw',
    height: '100vh',
    border: '3px solid black',
    borderRadius: '20px',
    backgroundColor: 'transparent',
    padding: '15px',
    position: 'relative',
  },

  PostContainer: {
    width: '91vw',
    border: '3px solid black',
    borderRadius: '20px',
    backgroundColor: 'transparent',
    padding: '20px',
    position: 'relative',
    marginTop: '20px',
  },
  
  postsWrapper: {
    display: 'flex',
    gap: '50px',
    marginLeft: '30px',
    overflowX: 'auto',
    scrollbarWidth: 'none',  // Firefox
    '-ms-overflow-style': 'none',  // IE and Edge
    padding: '20px 0',
    '&::-webkit-scrollbar': {
      display: 'none', // Doesn't hide in chrome.
    }
  },

  postCard: {
    flex: '0 0 280px', 
    border: '1px solid black',
    borderRadius: '10px',
    backgroundColor: 'lightblue',
    boxShadow: '1px 1px 3px grey',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '25vw', 
    width: '10vw',
    height: '55vh',
    overflow: 'hidden',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    }
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

  cardImage: {
    width: '100%',
    height: '60%',
    objectFit: 'fit',
    borderRadius: '8px',
  },

  cardContent: {
    padding: '15px',
  },

  arrowButton: {
    display: 'none'
  },
  indicators: {
    display: 'none'
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
    justifyContent: 'space-around',
    borderRadius: '50px',
    border: '2px solid black',
    padding: '5px',
    width: '30%',
  },
  likeButton: {
    backgroundColor: 'transparent',
    color: 'darkgreen',
    padding: '0',
    cursor: 'pointer',
    borderRadius: '50px',
    border: 'none',
  },
  hr: {
    margin: '0',
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
    padding: '0',
  },
  leftArrow: {
    left: '0px',
  },
  rightArrow: {
    right: '0px',
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

  newsGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '20px',
    padding: '20px',
  },
  mainNewsSection: {
    width: '100%',
  },

  mainNewsCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  mainCardImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  },
  mainCardContent: {
    padding: '20px',
  },
  mainCardTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  mainCardText: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333',
  },
  subNewsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    height: '80vh',          
    overflowY: 'auto',      
    paddingRight: '10px',   
    
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  subNewsCard: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    height: '120px',
    minHeight: '120px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',    // Add smooth hover effect
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    },
  },
  subCardImage: {
    width: '120px',
    height: '120%',
    objectFit: 'cover',
  },
  subCardContent: {
    padding: '15px',
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  subCardTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  subCardMeta: {
    fontSize: '12px',
    color: '#666',
  },
};


export default DiscoverComponent;