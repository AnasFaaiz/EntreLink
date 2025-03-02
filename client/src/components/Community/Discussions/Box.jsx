import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const samplePosts = [
  {
    title: "Starting a Tech Startup",
    subtitle: "Looking for advice on launching a tech startup in 2024",
    tags: ["Tech", "Startup", "Business"],
    timestamp: "2 hours ago",
    author: "John Doe"
  },
  {
    title: "Funding Resources",
    subtitle: "What are the best funding options for early-stage startups?",
    tags: ["Funding", "Investment", "VC"],
    timestamp: "5 hours ago",
    author: "Jane Smith"
  }
];

const Box = ({ posts = samplePosts }) => {
  return (
    <div style={styles.boxContainer}>
      {posts.map((post, index) => (
        <PostItem key={index} {...post} />
      ))}
    </div>
  );
};

const PostItem = ({ title, subtitle, tags, timestamp, author }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  const handleLike = () => {
    if (activeButton === 'like') {
      setLikes(prev => prev - 1);
      setActiveButton(null);
    } else {
      setLikes(prev => prev + 1);
      if (activeButton === 'dislike') {
        setDislikes(prev => prev - 1);
      }
      setActiveButton('like');
    }
  };

  const handleDislike = () => {
    if (activeButton === 'dislike') {
      setDislikes(prev => prev - 1);
      setActiveButton(null);
    } else {
      setDislikes(prev => prev + 1);
      if (activeButton === 'like') {
        setLikes(prev => prev - 1);
      }
      setActiveButton('dislike');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.votingSection}>
        <button 
          style={{
            ...styles.voteButton,
            color: activeButton === 'like' ? 'rgb(35, 142, 40)' : '#666'
          }}
          onClick={handleLike}
        >
          <ThumbUpIcon />
          <span style={styles.voteCount}>{likes}</span>
        </button>
        <button 
          style={{
            ...styles.voteButton,
            color: activeButton === 'dislike' ? ' #dc3545' : '#666'
          }}
          onClick={handleDislike}
        >
          <ThumbDownIcon />
          <span style={styles.voteCount}>{dislikes}</span>
        </button>
      </div>
      <div style={styles.contentSection}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.subtitle}>{subtitle}</p>
        <div style={styles.metadata}>
          <span style={styles.author}>Posted by {author}</span>
          <span style={styles.timestamp}>{timestamp}</span>
        </div>
        <div style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <span key={index} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  boxContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '10px',
  },
  container: {
    display: 'flex',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    gap: '20px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    }
  },
  votingSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px',
    gap: '10px',
    padding: '10px',
    backgroundColor: 'lightgrey',
  },
  voteButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
    transition: 'all 0.2s ease',
  },
  voteCount: {
    fontSize: '14px',
    marginTop: '2px',
  },
  contentSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0',
    color: '#333',
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
    margin: '0',
  },
  metadata: {
    display: 'flex',
    gap: '15px',
    fontSize: '12px',
    color: '#888',
  },
  author: {
    fontWeight: '500',
  },
  timestamp: {
    color: '#999',
  },
  tagsContainer: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginTop: '5px',
  },
  tag: {
    backgroundColor: '#e3f2fd',
    color: '#1e88e5',
    padding: '4px 8px',
    borderRadius: '16px',
    fontSize: '12px',
  },
};

export default Box;