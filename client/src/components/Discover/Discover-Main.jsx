import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import PostCard from './postCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Discover = () => {
  const navigate = useNavigate();
  const [isFilterButtonHovered, setIsFilterButtonHovered] = useState(false);
  const [isCreateButtonHovered, setIsCreateButtonHovered] = useState(false);

  const gotoDiscover = () => {
    navigate('/EntreLink/Discover');
  };

  const gotoNews = () => {
    navigate('/EntreLink/News');
  };

  const posts = [
    {
      title: 'AI Driven Language',
      description: 'This is the description for post 1.',
      author: 'John Doe',
      date: '2023-10-01',
      imageUrl: 'https://www.fsm.ac.in/blog/wp-content/uploads/2022/06/Entrepreneur-1024x643.jpg',
    },
    {
      title: 'Post 2',
      description: 'This is the description for post 2.',
      author: 'Jane Doe',
      date: '2023-10-02',
      imageUrl: 'https://www.fsm.ac.in/blog/wp-content/uploads/2022/06/Entrepreneur-1024x643.jpg',
    },
    {
      title: 'Post 3',
      description: 'This is the description for post 2.',
      author: 'Jane Doe',
      date: '2023-10-02',
      imageUrl: 'https://www.fsm.ac.in/blog/wp-content/uploads/2022/06/Entrepreneur-1024x643.jpg',
    },
    {
      title: 'Post 4',
      description: 'This is the description for post 2.',
      author: 'Jane Doe',
      date: '2023-10-02',
      imageUrl: 'https://www.fsm.ac.in/blog/wp-content/uploads/2022/06/Entrepreneur-1024x643.jpg',
    },
    {
      title: 'Post 5',
      description: 'This is the description for post 2.',
      author: 'Jane Doe',
      date: '2023-10-02',
      imageUrl: 'https://www.fsm.ac.in/blog/wp-content/uploads/2022/06/Entrepreneur-1024x643.jpg',
    },
    {
      title: 'Post 6',
      description: 'This is the description for post 2.',
      author: 'Jane Doe',
      date: '2023-10-02',
      imageUrl: 'https://www.fsm.ac.in/blog/wp-content/uploads/2022/06/Entrepreneur-1024x643.jpg',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className='Title' style={styles.heading}>
        <div className="buttons" style={styles.buttons}>
          <button style={styles.buttondetail} onClick={gotoNews}>News</button>
          <div style={styles.verticalLine}></div>
          <button style={styles.buttondetail} onClick={gotoDiscover}>Discover</button>
        </div>
      </div>
      
      <div style={styles.filterButtonContainer}>
        <button 
          style={isFilterButtonHovered ? { ...styles.filterButton, ...styles.filterButtonHover } : styles.filterButton}
          onMouseEnter={() => setIsFilterButtonHovered(true)}
          onMouseLeave={() => setIsFilterButtonHovered(false)}
        >
          <FontAwesomeIcon icon={faFilter} style={styles.filterIcon} />
          Filter
        </button>
        <button 
          style={isCreateButtonHovered ? { ...styles.createButton, ...styles.createButtonHover } : styles.createButton}
          onMouseEnter={() => setIsCreateButtonHovered(true)}
          onMouseLeave={() => setIsCreateButtonHovered(false)}
        >
          + Create
        </button>
      </div>
      <div className='NewsContainer' style={styles.NewsContainer}>
        <div className="TopContributers" style={styles.TopContributers}>
          <h3 style={styles.title}>Top Contributers</h3>
          <hr style={styles.hr}></hr>
          <h4 style={styles.Items}>1. John Doe</h4>
          <hr style={styles.hr}></hr>
          <h4 style={styles.Items}>2. Jane Doe</h4>
          <hr style={styles.hr}></hr>
          <h4 style={styles.Items}>3. John Doe</h4>
          <hr style={styles.hr}></hr>
          <h4 style={styles.Items}>4. Jane Doe</h4>
          <hr style={styles.hr}></hr>
          <h4 style={styles.Items}>5. John Doe</h4>
        </div>
        <div className="postCardsContainer" style={styles.postCardsContainer}>
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              description={post.description}
              author={post.author}
              date={post.date}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #E0E0E0',
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
    color: "#E0E0E0",
  },
  verticalLine: {
    width: '1px',
    height: '30px',
    backgroundColor: '#E0E0E0',
    position: 'absolute',
    top: '5px',
    left: '50%',
  },
  heading: {},
  headingTitle: {
    margin: '0',
    padding: '0',
  },
  filterButtonContainer: {
    position: 'absolute',
    top: '10%',
    right: '5%',
    display: 'flex',
    gap: '10px',
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#008B8B',
    color: '#0D1117',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '0px 0px 12px rgba(218, 165, 32, 0.4)',
  },
  filterButtonHover: {
    backgroundColor: '#DAA520',
    color: '#121829',
    boxShadow: '0px 0px 16px rgba(218, 165, 32, 0.8)',
  },
  filterIcon: {
    marginRight: '10px',
  },
  createButton: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#008B8B',
    color: '#0D1117',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '0px 0px 12px rgba(218, 165, 32, 0.4)',
  },
  createButtonHover: {
    backgroundColor: '#DAA520',
    color: '#121829',
    boxShadow: '0px 0px 16px rgba(218, 165, 32, 0.8)',
  },
  NewsContainer: {
    position: 'absolute',
    top: '17%',
    width: '100%',
    left: '0%',
  },
  TopContributers: {
    width: '23vw',
    height: "45vh",
    border: '2px solid black',
    borderRadius: '10px',
    left: '1%',
    position: 'absolute',
    top: '10px',
    backgroundColor: '#1E1E1E',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    padding: '10px 0',
    margin: '0',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#DAA520',
    textAlign: 'center',
    backgroundColor: '#0a0a0a',
    borderRadius: '10px 10px 0 0',
  },
  hr: {
    border: 'none',
    borderTop: '1px solid #fff',
    margin: '10px 0',
  },
  Items: {
    margin: '10px 0',
    fontSize: '18px',
    color: '#fff',
  },
  postCardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '75px',
    width: '60%',
    position: 'absolute',
    left: '31%',
  },
};

export default Discover;