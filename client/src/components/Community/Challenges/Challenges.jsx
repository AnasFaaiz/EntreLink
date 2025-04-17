import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar';
import './Challenges.css';
import Category from '../Category';

const Challenges = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [challenges, setChallenges] = useState([]);
  const [newChallenge, setNewChallenge] = useState({
    title: '',
    category: 'pitch',
    description: '',
    prize: '',
    deadline: '',
    difficulty: 'Intermediate',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const challenge = {
      id: Date.now(),
      ...newChallenge,
      participants: 0,

      deadline: new Date(newChallenge.deadline).toLocaleDateString()
    };
    // Add the new challenge to the list (you might want to use a proper state management solution)
    setChallenges(prevChallenges => [...prevChallenges, challenge]);

    setShowDialog(false);
    setNewChallenge({
      title: '',
      category: 'pitch',
      description: '',
      prize: '',
      deadline: '',
      difficulty: 'Intermediate',
      image: ''
    });
  };
  // Initial data load
  useEffect(() => {
    // Simulating API call with initial data
    const initialChallenges = [
      {
        id: 1,
        title: "Startup Pitch Competition",
        category: "pitch",
        description: "Present your innovative business idea to a panel of industry experts and win seed funding.",
        prize: "$10,000",
        deadline: "2024-04-15",
        participants: 45,
        difficulty: "Advanced",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      // ...other challenge objects
    ];
    setChallenges(initialChallenges);
  }, []);

  const handleParticipate = (challengeID) => {
    setChallenges(prevChallenges => 
      prevChallenges.map(challenge =>
        challenge.id === challengeId
          ? { ...challenge, participants: challenge.participants + 1 }
          : challenge
      )
    );
  };

  // const challenges = [
  //   {
  //     id: 1,
  //     title: "Startup Pitch Competition",
  //     category: "pitch",
  //     description: "Present your innovative business idea to a panel of industry experts and win seed funding.",
  //     prize: "$10,000",
  //     deadline: "2024-04-15",
  //     participants: 45,
  //     difficulty: "Advanced",
  //     image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  //   },
  //   {
  //     id: 2,
  //     title: "Social Impact Challenge",
  //     category: "social",
  //     description: "Develop a solution that addresses a pressing social issue in your community.",
  //     prize: "$5,000",
  //     deadline: "2024-05-01",
  //     participants: 78,
  //     difficulty: "Intermediate",
  //     image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  //   },
  //   {
  //     id: 3,
  //     title: "Tech Innovation Hackathon",
  //     category: "tech",
  //     description: "Build innovative tech solutions using cutting-edge technologies.",
  //     prize: "$15,000",
  //     deadline: "2024-04-30",
  //     participants: 120,
  //     difficulty: "Advanced",
  //     image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  //   },
  //   {
  //     id: 4,
  //     title: "Sustainable Business Model",
  //     category: "sustainability",
  //     description: "Create a sustainable business model that balances profit and environmental impact.",
  //     prize: "$8,000",
  //     deadline: "2024-05-15",
  //     participants: 56,
  //     difficulty: "Intermediate",
  //     image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  //   }
  // ];

  const categories = [
    { id: 'all', name: 'All Challenges' },
    { id: 'pitch', name: 'Pitch Competitions' },
    { id: 'social', name: 'Social Impact' },
    { id: 'tech', name: 'Tech Innovation' },
    { id: 'sustainability', name: 'Sustainability' }
  ];

  const filteredChallenges = challenges.filter(challenge => {
    const matchesCategory = selectedCategory === 'all' || challenge.category === selectedCategory;
    const matchesSearch = 
      challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      challenge.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isFormValid = () => {
    return (
      newChallenge.title &&
      newChallenge.description &&
      newChallenge.prize &&
      newChallenge.deadline &&
      newChallenge.image
    );
  };

  const handleInputChange = (e, field) => {
    setNewChallenge(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="container">
      <Navbar />
      <div className="main-content">
        <Category 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategiryChange={setSelectedCategory}
        />
      
      <div className="challenges-container">
        <div className="challenges-header">
          <div className="header-content">
            <h1>Entrepreneurship Challenges</h1>
            <p>Discover exciting opportunities to showcase your skills and win prizes</p>
          </div>
          <button
            className="add-challenge-btn"
            onClick={() => setShowDialog(true)}
          >
            +
          </button>
        </div>

        {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h2>Create New Challenge</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={newChallenge.title}
                  onChange={(e) => handleInputChange(e, 'title')}
                  required
                  placeholder="Entre Challenge Title"
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  value={newChallenge.category}
                  onChange={(e) => setNewChallenge({...newChallenge, category: e.target.value})}
                >
                  {categories.filter(cat => cat.id !== 'all').map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newChallenge.description}
                  onChange={(e) => setNewChallenge({...newChallenge, description: e.target.value})}
                  required
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label>Prize</label>
                <input
                  type="text"
                  value={newChallenge.prize}
                  onChange={(e) => setNewChallenge({...newChallenge, prize: e.target.value})}
                  required
                  placeholder="e.g. $10,000"
                />
              </div>

              <div className="form-group">
                <label>Deadline</label>
                <input
                  type="date"
                  value={newChallenge.deadline}
                  onChange={(e) => setNewChallenge({...newChallenge, deadline: e.target.value})}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label>Difficulty</label>
                <select
                  value={newChallenge.difficulty}
                  onChange={(e) => setNewChallenge({...newChallenge, difficulty: e.target.value})}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="url"
                  value={newChallenge.image}
                  onChange={(e) => setNewChallenge({...newChallenge, image: e.target.value})}
                  placeholder="Enter image URL"
                  required
                />
              </div>

              <div className="dialog-buttons">
                <button type="submit" className="submit-btn" disabled={!isFormValid()}>Create Challenge</button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowDialog(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

        <div className="challenges-filters">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search challenges..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="challenges-grid">
        {filteredChallenges.map(challenge => (
          <div key={challenge.id} className="challenge-card">
            <div className="challenge-image">
              <img src={challenge.image} alt={challenge.title} />
            </div>
            <div className="challenge-content">
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
              <div className="challenge-details">
                <span className="prize">Prize: {challenge.prize}</span>
                <span className="deadline">Deadline: {challenge.deadline}</span>
                <span className="participants">{challenge.participants} participants</span>
                <span className="difficulty">{challenge.difficulty}</span>
              </div>
              <button 
                className="participate-btn"
                onClick={() => handleParticipate(challenge.id)}
              >
                Participate Now
              </button>
            </div>
          </div>
        ))}
        
        {filteredChallenges.length === 0 && (
          <div className="no-results">
            <p>No challenges found matching your criteria.</p>
          </div>
        )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Challenges;