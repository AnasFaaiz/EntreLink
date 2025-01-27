import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import Navbar from './Navbar';
import PostCard from './Posts/postCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Discover = () => {
  const navigate = useNavigate();

  const gotoDiscover = () => {
    navigate('/Discover');
  };

  const gotoNews = () => {
    navigate('/News');
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
    // Add more posts as needed
  ];

  return (
    <div>
      <Navbar />
      <div className='Title' style={styles.heading}>
        <h2 style={styles.headingTitle}>Latest Posts</h2>
        {/* <hr style={{...styles.hr, border: '1px solid black', margin: '0'}}></hr> */}
      </div>
      <div className="buttons" style={styles.buttons}>
        <button style={styles.buttondetail} onClick={gotoNews}>News</button>
        <div style={styles.verticalLine}></div>
        <button style={styles.buttondetail} onClick={gotoDiscover}>Discover</button>
      </div>
      <div style={styles.filterButtonContainer}>
        <button style={styles.filterButton}>
          <FontAwesomeIcon icon={faFilter} style={styles.filterIcon} />
          Filter
        </button>
        <button style={styles.createButton}>+ Create</button>
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
            imageUrl={post.imageUrl} // Pass image URL here
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
    border: '1px solid black',
    borderRadius: '5px',
    width: '18vw',
    position: 'absolute',
    top: '11%',
    right: '1%',
    gap: '10px',
  },
  buttondetail: {
    backgroundColor: "transparent",
    border: "none",
    color: "black",
  },
  verticalLine: {
    width: '1px',
    height: '30px',
    backgroundColor: 'black',
    position: 'absolute',
    top: '5px',
    left: '50%',
  },
  heading: {
    fontSize: '2rem',
    position: 'absolute',
    top: '9%',
  },
  headingTitle: {
    margin: '0',
    padding: '0',
    // marginTop: '30px',
    marginLeft: '20px',
  },
  filterButtonContainer: {
    position: 'absolute',
    top: '11%',
    right: '21%',
    display: 'flex',
    gap: '10px',
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    // padding: '10px 20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#008080', // Teal green hex code
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  filterIcon: {
    marginRight: '10px',
  },
  createButton: {
    display: 'flex',
    alignItems: 'center',
    // padding: '10px 20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#008080', // Teal green hex code
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  NewsContainer: {
    position: 'absolute',
    top: '20%',
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
    backgroundColor: '#66b2b2',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    padding: '10px 0',
    margin: '0',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#008080', // Teal green hex code
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
    // marginTop: '20px',
    width: '60%',
    position: 'absolute',
    left: '31%',
  },
};

export default Discover;