import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import GroupCard from "./Community/GroupCard";
import Category from "./Category";
import SquadCircle from "./Community/SquadCircle";


const Community = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [mySquads, setMySquads] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState('all');
  const [squadForm, setSquadForm] = useState({
    name: "",
    description: "",
    tags: '',
    privacy: 'public'
  });
  const [exploreSquads, setExploreSquads] = useState([
    {
      id: 1,
      name: "Tech Innovators",
      description: "A community of tech enthusiasts and innovators",
      tags: ["Technology", "Startups", "Innovation"],
      keywords: ["AI", "Blockchain", "Web Development"],
      memberCount: 120,
      activityLevel: "High",
      privacy: "public",
      profilePic: "./images/EntreLink.png"
    },
    {
      id: 2,
      name: "Social Impact Hub",
      description: "Making positive change through social entrepreneurship",
      tags: ["Social Enterprise", "Sustainability", "Impact"],
      keywords: ["SDGs", "Community", "Non-profit"],
      memberCount: 85,
      activityLevel: "Medium",
      privacy: "public",
      profilePic: "./images/EntreLink.png"
    }
  ]);

  // Add this effect to update exploreSquads when mySquads changes
  useEffect(() => {
    const allSquads = [...exploreSquads.filter(squad => !mySquads.find(my => my.id === squad.id)), 
                       ...mySquads.map(squad => ({
                         ...squad,
                         memberCount: 1,
                         activityLevel: "New",
                         keywords: squad.tags
                       }))];
    setExploreSquads(allSquads);
  }, [mySquads]);

  const filteredExploreSquads = exploreSquads.filter(squad => {
    const matchesSearch = 
      squad.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      squad.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = 
      filterTag === 'all' || 
      squad.tags.some(tag => tag.toLowerCase() === filterTag.toLowerCase());
    return matchesSearch && matchesTag;
  });


  const groupData = {
    name: "Tech Innovators",
    tags: ["Technology", "Startups", "Innovation"],
    keywords: ["AI", "Blockchain", "Web Development"],
    memberCount: 120,
    activityLevel: "High",
  };


  const styles = {
    container: {
      width: '98.7vw',  // Full viewport width
      maxWidth: '100%', // Ensures it doesn't exceed screen width
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 0,
      padding: 0,
    },
    mainContent: {
      display: "flex",
      flexDirection: "row",
      width: '100%',
      maxWidth: "1200px", 
      padding: "20px",
      marginTop: "4%",
      margin: "5",
    },
    leftColumn: {
      flex: "0.8",
      display: "flex",
    },
    rightColumn: {
      flex: "2.3",
      backgroundColor: "#1E1E1E",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    createSquadSection: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    sbutton: {
      padding: '10px 15px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: isHovered ? '#DAA520' : '#008B8B',
      fontWeight: 'bold',
      color: '#001F3F',
      cursor: 'pointer',
      fontSize: '16px',
      boxShadow: isHovered ? '0px 0px 16px rgba(218, 165, 32, 0.8)': '0px 0px 10px rgba(218, 165, 32, 0.4)',
      transition: 'background-color 0.3s ease',
    },
    sectionTitle: {
      fontSize: "17px",
      color: "#008080",
      fontWeight: "bold",
      fontFamily: "'Roboto', sans-serif",
      textTransform: "uppercase",
      position: "relative",
      borderBottom: "2px solid #008080",
      margin : "0",
      marginBottom: "15px",
      width: "70%",
    },
    mysquads: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      color: "#E0E0E0",
      minHeight: "100px", // Ensures consistent height even when empty
      padding: "10px 0"
    },
    emptySquads: {
      width: "100%",
      textAlign: "center",
      color: "#E0E0E0",
      fontStyle: "italic",
      padding: "20px 0"
    },
    squadsSection: {
      display: "flex",
      flexDirection: "column",
      
    },
    exploreSection: {
      display: "flex",
      flexDirection: "column",
    },
    groupCardsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
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
      width: '500px',
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
    select: {
      width: '100%',
      padding: '12px',
      marginTop: '8px',
      backgroundColor: '#2C2C2C',
      border: '2px solid #008080',
      borderRadius: '8px',
      color: '#E0E0E0',
      fontSize: '16px',
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
    exploreFilters: {
      display: 'flex',
      gap: '15px',
      marginBottom: '20px',
      width: '100%',
    },
    searchInput: {
      flex: 2,
      padding: '12px',
      backgroundColor: '#2C2C2C',
      border: '2px solid #008080',
      borderRadius: '8px',
      color: '#E0E0E0',
      fontSize: '16px',
      outline: 'none',
    },
    filterSelect: {
      flex: 1,
      padding: '12px',
      backgroundColor: '#2C2C2C',
      border: '2px solid #008080',
      borderRadius: '8px',
      color: '#E0E0E0',
      fontSize: '16px',
      outline: 'none',
    },
    emptyMessage: {
      color: '#E0E0E0',
      fontStyle: 'italic',
      textAlign: 'center',
      padding: '20px 0',
    }


  };

  return (
    <div className="container" style={styles.container}>
      <Navbar />
      <div style={styles.mainContent}>
        <div style={styles.leftColumn}>
          <Category />
        </div>
        
        <div style={styles.rightColumn}>
          <div style={styles.squadsSection}>
            <div style={styles.createSquadSection}>
            <h4 style={styles.sectionTitle}>My Squads</h4>
            <button style={styles.sbutton} 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setShowDialog(true)} >Create Squad</button>
            </div>

            {showDialog && (
              <div style={styles.overlay}>
                <div style={styles.dialog}>
                  <h2 style={styles.dialogTitle}>Create New Squad</h2>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const newSquad = {
                      id: Date.now(), // temporary ID
                      name: squadForm.name,
                      description: squadForm.description,
                      tags: tags,
                      privacy: squadForm.privacy,
                      profilePic: "./images/EntreLink.png" // default image
                    };
                    
                    setMySquads([...mySquads, newSquad]);
                    setShowDialog(false);

                    setSquadForm({
                      name: "",
                      description: "",
                      tags: "",
                      privacy: "public"
                    });
                    setTags([]);
                    setTagInput("");
                  }}>
                    <div style={styles.formGroup}>
                      <label>Squad Name</label>
                      <input
                        type="text"
                        value={squadForm.name}
                        onChange={(e) => setSquadForm({...squadForm, name: e.target.value})}
                        required
                        style={styles.input}
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label>Description</label>
                      <textarea
                        value={squadForm.description}
                        onChange={(e) => setSquadForm({...squadForm, description: e.target.value})}
                        required
                        style={styles.textarea}
                        rows="4"
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label>Tags</label>
                      <div style={styles.tagContainer}>
                        {tags.map((tag, index) => (
                          <span key={index} style={styles.tag}>
                            <span style={styles.tagText}>{tag}</span>
                            <button
                              type="button"
                              style={styles.tagDelete}
                              onClick={() => {
                                const newTags = tags.filter((_, i) => i !== index);
                                setTags(newTags);
                                setSquadForm({ ...squadForm, tags: newTags.join(',') });
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
                                if (!tags.includes(newTag)) {
                                  const newTags = [...tags, newTag];
                                  setTags(newTags);
                                  setSquadForm({ ...squadForm, tags: newTags.join(',') });
                                }
                                setTagInput('');
                              }
                            } else if (e.key === 'Backspace' && !tagInput && tags.length > 0) {
                              const newTags = tags.slice(0, -1);
                              setTags(newTags);
                              setSquadForm({ ...squadForm, tags: newTags.join(',') });
                            }
                          }}
                          placeholder={tags.length === 0 ? "Type and press Enter to add tags" : ""}
                        />
                      </div>
                    </div>
                    <div style={styles.formGroup}>
                      <label>Privacy</label>
                      <select
                        value={squadForm.privacy}
                        onChange={(e) => setSquadForm({...squadForm, privacy: e.target.value})}
                        style={styles.select}
                      >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                      </select>
                    </div>
                    <div style={styles.buttonGroup}>
                      <button type="submit" style={styles.submitButton}>
                        Create Squad
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
            
            <div style={styles.mysquads}>
              {mySquads.length === 0 ? (
                <p style={{ color: '#E0E0E0', fontStyle: 'italic' }}>
                  No squads yet. Create your first squad!
                </p>
              ) : (
                mySquads.map(squad => (
                  <SquadCircle 
                    key={squad.id}
                    name={squad.name}
                    profilePic={squad.profilePic}
                    onClick={() => {
                      // Handle squad click - you can add navigation or details view here
                      console.log('Squad clicked:', squad);
                    }}
                  />
                ))
              )}
            </div>
          </div>
          
          <div style={styles.exploreSection}>
            <h4 style={styles.sectionTitle}>Explore Squads</h4>
            <div style={styles.exploreFilters}>
              <input
                type="text"
                placeholder="Search squads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
              <select 
                value={filterTag}
                onChange={(e) => setFilterTag(e.target.value)}
                style={styles.filterSelect}
              >
                <option value="all">All Tags</option>
                {Array.from(new Set(exploreSquads.flatMap(squad => squad.tags))).map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
            
            <div style={styles.groupCardsContainer}>
              {filteredExploreSquads.map(squad => {
                const isJoined = mySquads.some(mySquad => mySquad.id === squad.id);
                return (
                  <GroupCard
                    key={squad.id}
                    group={{
                      name: squad.name,
                      description: squad.description,
                      tags: squad.tags,
                      keywords: squad.keywords || squad.tags,
                      memberCount: squad.memberCount || 1,
                      activityLevel: squad.activityLevel || "New",
                      privacy: squad.privacy,
                      profilePic: squad.profilePic,
                      isJoined: isJoined // Add this property
                    }}
                    isJoined={isJoined} // Add this prop
                    onJoin={() => {
                      if (!isJoined) {
                        setMySquads([...mySquads, squad]);
                      }
                    }}
                  />
                );
              })}
              {filteredExploreSquads.length === 0 && (
                <p style={styles.emptyMessage}>
                  No squads match your search criteria.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Community;