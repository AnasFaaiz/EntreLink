import React, { useState } from 'react';
import Navbar from '../Navbar';
import Category from './Category';
import Box from './Discussions/Box';

const Discussion = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postForm, setPostForm] = useState({
    title: '',
    subtitle: '',
    content: '',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(), // temporary ID until backend integration
      ...postForm,
      timestamp: 'Just now',
      author: 'Current User', // Replace with actual user data
      likes: 0,
      dislikes: 0,
      activeVote: null
    };

    setPosts(currentPosts => [newPost, ...currentPosts]);
    setShowDialog(false);
    setPostForm({ title: '', subtitle: '', content: '', tags: [] });
    setTagInput('');
  };

  const handleVote = (postId, voteType) => {
    setPosts(currentPosts => 
      currentPosts.map(post => {
        if (post.id === postId) {
          const { likes = 0, dislikes = 0, activeVote } = post;
          
          if (activeVote === voteType) {
            return {
              ...post,
              [voteType === 'like' ? 'likes' : 'dislikes']: 
                voteType === 'like' ? likes - 1 : dislikes - 1,
              activeVote: null
            };
          } else {
            return {
              ...post,
              likes: voteType === 'like' ? likes + 1 : 
                     activeVote === 'like' ? likes - 1 : likes,
              dislikes: voteType === 'dislike' ? dislikes + 1 : 
                       activeVote === 'dislike' ? dislikes - 1 : dislikes,
              activeVote: voteType
            };
          }
        }
        return post;
      })
    );
  };

  return (
    <div className="container">
      <Navbar />
      <div style={styles.mainContent}>
        <div style={styles.layout}>
          <aside style={styles.sidebar}>
            <Category />
          </aside>
          <main style={styles.content}>
            <div style={styles.headerSection}>
              <h1 style={styles.heading}>Discussions</h1>
              <button 
                style={{
                  ...styles.createButton,
                  backgroundColor: isHovered ? '#DAA520' : '#008B8B',
                  boxShadow: isHovered 
                    ? '0px 0px 16px rgba(218, 165, 32, 0.8)'
                    : '0px 0px 10px rgba(218, 165, 32, 0.4)',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setShowDialog(true)}
              >
                Create Post
              </button>
            </div>
            <div>
              <Box 
                posts={posts}
                onVote={handleVote}
              />
            </div>
          </main>

          {showDialog && (
          <div style={styles.overlay}>
            <div style={styles.dialog}>
              <h2 style={styles.dialogTitle}>Create New Post</h2>
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label>Title</label>
                  <input
                    type="text"
                    value={postForm.title}
                    onChange={(e) => setPostForm({...postForm, title: e.target.value})}
                    required
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>Subtitle</label>
                  <input
                    type="text"
                    value={postForm.subtitle}
                    onChange={(e) => setPostForm({...postForm, subtitle: e.target.value})}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>Content</label>
                  <textarea
                    value={postForm.content}
                    onChange={(e) => setPostForm({...postForm, content: e.target.value})}
                    required
                    style={styles.textarea}
                    rows="6"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>Tags</label>
                  <div style={styles.tagContainer}>
                    {postForm.tags.map((tag, index) => (
                      <span key={index} style={styles.tag}>
                        <span style={styles.tagText}>{tag}</span>
                        <button
                          type="button"
                          style={styles.tagDelete}
                          onClick={() => {
                            const newTags = postForm.tags.filter((_, i) => i !== index);
                            setPostForm({ ...postForm, tags: newTags });
                          }}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      style={styles.tagInput}
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ',') {
                          e.preventDefault();
                          if (tagInput.trim()) {
                            const newTag = tagInput.trim();
                            if (!postForm.tags.includes(newTag)) {
                              setPostForm({
                                ...postForm,
                                tags: [...postForm.tags, newTag]
                              });
                            }
                            setTagInput('');
                          }
                        }
                      }}
                      placeholder="Type and press Enter to add tags"
                    />
                  </div>
                </div>
                <div style={styles.buttonGroup}>
                  <button type="submit" style={styles.submitButton}>
                    Create Post
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDialog(false)}
                    style={styles.cancelButton}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '98.7vw',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  mainContent: {
    display: "flex",
    position: "relative",
    minHeight: "calc(100vh - 65px)",
    marginTop: "65px",
    padding: "20px",
    width: '100%',
    // maxWidth: "1200px",
  },
  layout: {
    display: "flex",
    width: "95vw",
    gap: "15px",
  },
  sidebar: {
    flex: "0.8",
    display: "flex",
  },
  content: {
    flex: "2.3",
    backgroundColor: "#1E1E1E", // Changed from #f5f5f5 to match dark theme
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  heading: {
    fontSize: "17px",
    color: "#008080", // Changed from #333 to teal
    fontWeight: "bold",
    fontFamily: "'Roboto', sans-serif",
    textTransform: "uppercase",
    position: "relative",
    borderBottom: "2px solid #008080",
    margin: "0",
    marginBottom: "0",
    width: "70%",
  },
  headerSection: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  createButton: {
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    fontWeight: 'bold',
    color: '#001F3F',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(5px)',
  },
  dialog: {
    backgroundColor: '#1E1E1E',
    padding: '30px',
    borderRadius: '15px',
    width: '600px',
    maxWidth: '90%',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    color: '#E0E0E0',
  },
  dialogTitle: {
    color: '#008080',
    marginBottom: '25px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: '600',
  },
  formGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginTop: '8px',
    backgroundColor: '#2C2C2C',
    border: '2px solid #008080',
    borderRadius: '8px',
    color: '#E0E0E0',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    marginTop: '8px',
    backgroundColor: '#2C2C2C',
    border: '2px solid #008080',
    borderRadius: '8px',
    color: '#E0E0E0',
    fontSize: '16px',
    resize: 'vertical',
    minHeight: '100px',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '8px',
    backgroundColor: '#2C2C2C',
    border: '2px solid #008080',
    borderRadius: '8px',
    minHeight: '45px',
  },
  tag: {
    backgroundColor: '#008080',
    color: '#E0E0E0',
    padding: '4px 8px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  tagText: {
    fontSize: '14px',
  },
  tagDelete: {
    background: 'none',
    border: 'none',
    color: '#E0E0E0',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
  },
  tagInput: {
    background: 'none',
    border: 'none',
    color: '#E0E0E0',
    fontSize: '14px',
    padding: '4px',
    flex: '1',
    minWidth: '60px',
    outline: 'none',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px',
    marginTop: '30px',
  },
  submitButton: {
    padding: '12px 24px',
    backgroundColor: '#008080',
    color: '#E0E0E0',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  cancelButton: {
    padding: '12px 24px',
    backgroundColor: '#444',
    color: '#E0E0E0',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
};

export default Discussion;