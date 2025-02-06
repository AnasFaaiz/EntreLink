import React, { useState } from 'react';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const PostCard = ({ title, description, author, date, imageUrl }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="postCard" style={styles.card}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <h4 style={styles.title}>{title}</h4>
      <div style={styles.likeDislikeContainer}>
        <button style={styles.likeButton} onClick={handleLike}>
          <SentimentVerySatisfiedIcon /> ({likes})
        </button>
        <hr />
        <button style={styles.dislikeButton} onClick={handleDislike}>
          <SentimentVeryDissatisfiedIcon /> ({dislikes})
        </button>
      </div>
      {/* <p style={styles.description}>{description}</p> */}
      <div style={styles.footer}>
        <span style={styles.author}>By: {author}</span>
        <span style={styles.date}>{date}</span>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgb(20, 105, 94)',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px 10px 0 0',
    marginBottom: '10px',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '15px',
    margin: '0',
    color: "#E0E0E0",
  },
  buttonsContainer: {
    display: 'flex',
    // justifyContent: 'space-between',
    marginBottom: '10px',
  },
  icon: {
    marginRight: '5px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    color: 'white',
  },
  author: {
    fontStyle: 'italic',
  },
  date: {
    fontStyle: 'italic',
  },
  likeDislikeContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius: '50px',
    marginTop: '10px',
    marginBottom: '10px',
    border: '2px solid grey',
    padding: '5px',
    width: '50%',
    marginLeft: 'auto', // Move the container to the right end
  },
  likeButton: {
    backgroundColor: 'transparent',
    color: 'lightcyan',
    padding: '0',
    cursor: 'pointer',
    borderRadius: '50px',
    border: 'none',
  },
  dislikeButton: {
    backgroundColor: 'transparent',
    color: 'rgb(92, 15, 2)',
    padding: '0',
    cursor: 'pointer',
    borderRadius: '50px',
    border: 'none',
  },
};

export default PostCard;