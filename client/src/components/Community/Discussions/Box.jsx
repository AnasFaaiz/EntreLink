import React, { useState, useEffect } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';



const Box = ({ posts = [], onVote }) => {
  // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //   setPosts(initialPosts);
    // }, [initialPosts]);
      
    return (
      <div style={styles.boxContainer}>
        {posts.length === 0 ? (
          <div style={styles.emptyState}>
            <p style={styles.emptyText}>No discussions yet. Be the first to start a discussion!</p>
          </div>
        ) : (
          posts.map((post) => (
            <PostItem 
              key={post.id} 
              {...post} 
              onVote={(voteType) => onVote(post.id, voteType)}
            />
          ))
        )}
      </div>
    );
  };

const PostItem = ({ title, subtitle, tags, timestamp, author, likes = 0, dislikes = 0, activeVote, onVote }) => {

  return (
    <div style={styles.container}>
      <div style={styles.votingSection}>
        <button 
          style={{
            ...styles.voteButton,
            color: activeVote === 'like' ? '#008B8B' : '#666'
          }}
          onClick={() => onVote('like')}
        >
          <ThumbUpIcon />
          <span style={styles.voteCount}>{likes}</span>
        </button>
        <button 
          style={{
            ...styles.voteButton,
            color: activeVote === 'dislike' ? 'rgb(200, 24, 24)' : '#666'
          }}
          onClick={() => onVote('dislike')}
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
          {tags?.map((tag, index) => (
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
    backgroundColor: '#1E1E1E',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    gap: '20px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    border: '2px solid rgba(0, 128, 128, 0.1)',
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
    backgroundColor: '#2C2C2C',
    boxShadow: '0 2px 4px rgba(82, 200, 23, 0.1)',
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
    color: '#666',
  },
  voteCount: {
    fontSize: '14px',
    marginTop: '2px',
    color: '#E0E0E0',
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
    color: '#E0E0E0',
  },
  subtitle: {
    fontSize: '14px',
    color: '#E0E0E0',
    margin: '0',
  },
  metadata: {
    display: 'flex',
    gap: '15px',
    fontSize: '12px',
    color: '#E0E0E0',
  },
  author: {
    fontWeight: '500',
    color: '#008080',
  },
  timestamp: {
    color: '#E0E0E0',
    opacity: 0.6,
  },
  tagsContainer: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginTop: '5px',
  },
  tag: {
    backgroundColor: '#2C2C2C',
    color: '#008080',
    padding: '4px 8px',
    borderRadius: '16px',
    fontSize: '12px',
    border: '1px solid #004040',
  },
  emptyState: {
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#2C2C2C',
    borderRadius: '8px',
    border: '2px solid rgba(0, 128, 128, 0.1)',
  },
  emptyText: {
    color: '#E0E0E0',
    fontSize: '16px',
    fontStyle: 'italic',
  },
};

export default Box;