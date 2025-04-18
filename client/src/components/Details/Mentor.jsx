import React, { useState, useEffect } from 'react';
import colorPalette from '../colorPalette';
import Navbar from '../Navbar';
import { mentorProfiles } from '../../data/mentorProfiles';

const Mentor = () => {
    const [userProfile, setUserProfile] = useState({
        role: 'Entrepreneur',
        interests: [],
        experience: '',
        skills: [],
        mentorshipGoals: ''
    });
    const [skills, setSkills] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleConnect = async (mentorId) => {
        try {
            // In production, this would be an API call
            console.log(`Connecting with mentor ${mentorId}`);
            alert('Connection request sent!');
        } catch (error) {
            console.error('Error connecting:', error);
            alert('Failed to send connection request. Please try again.');
        }
    };

    const getAIRecommendations = async (profile) => {
        try {
            // Enhanced AI matching logic with interest categories
            const matchScore = (mentor) => {
                let score = 0;
                
                // Role compatibility (weighted higher)
                if (profile.role === 'Entrepreneur') {
                    if (mentor.role === 'Mentor') score += 5;
                    if (mentor.role === 'Investor') score += 4;
                    if (mentor.role === 'Professional') score += 3;
                }
                
                // Interest-based matching (primary factor)
                const interestCategories = {
                    ai: ['AI', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP'],
                    blockchain: ['Blockchain', 'Cryptocurrency', 'Smart Contracts', 'DeFi', 'Web3', 'DAOs'],
                    security: ['Security', 'Cybersecurity', 'Hacking', 'Penetration Testing', 'Network Security'],
                    entrepreneurship: ['Startup', 'Business Strategy', 'Fundraising', 'Growth', 'Product Market Fit']
                };
    
                // Check user interests against mentor expertise
                profile.interests.forEach(interest => {
                    const lowerInterest = interest.toLowerCase();
                    
                    // Direct interest match
                    if (mentor.interests.some(mi => mi.toLowerCase().includes(lowerInterest))) {
                        score += 3;
                    }
    
                    // Category match
                    Object.entries(interestCategories).forEach(([category, keywords]) => {
                        if (keywords.some(k => k.toLowerCase().includes(lowerInterest))) {
                            if (mentor.skills.some(s => keywords.some(k => s.toLowerCase().includes(k.toLowerCase())))) {
                                score += 2;
                            }
                        }
                    });
                });
                
                // Experience level matching (weighted based on user preference)
                const expLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
                const profileExpIndex = expLevels.indexOf(profile.experience);
                const mentorExpIndex = expLevels.indexOf(mentor.experience);
                
                // Prefer mentors with more experience than the user
                if (mentorExpIndex > profileExpIndex) score += 2;
                if (mentorExpIndex === expLevels.length - 1) score += 1; // Bonus for experts
                
                // Availability bonus
                if (mentor.availability === 'Weekly') score += 1;
                
                // Rating bonus
                score += mentor.rating - 4; // Add bonus for ratings above 4.0
                
                return score;
            };
    
            // Get matches with scores
            const matches = mentorProfiles
                .map(mentor => ({
                    ...mentor,
                    matchScore: matchScore(mentor)
                }))
                .sort((a, b) => b.matchScore - a.matchScore)
                .slice(0, 3); // Get top 3 matches
    
            // Add match percentage for display
            return matches.map(match => ({
                ...match,
                matchPercentage: Math.min(Math.round((match.matchScore / 15) * 100), 100) // Normalize to percentage
            }));
    
        } catch (error) {
            console.error('Error getting recommendations:', error);
            return [];
        }
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        const aiRecommendations = await getAIRecommendations(userProfile);
        setRecommendations(aiRecommendations);
        setLoading(false);
    };

    const MatchCard = ({ match }) => (
        <div style={styles.matchCard}>
            <div style={styles.matchHeader}>
                <img src={match.avatar} alt={match.name} style={styles.avatar} />
                <div style={styles.matchScore}>{match.matchPercentage}% Match</div>
                <div style={styles.rating}>★ {match.rating}</div>
            </div>
            <h3 style={styles.matchName}>{match.name}</h3>
            <p style={styles.matchRole}>{match.role}</p>
            <p style={styles.matchBio}>{match.bio}</p>
            <div style={styles.skillsContainer}>
                {match.skills.map((skill, i) => (
                    <span key={i} style={styles.skillTag}>{skill}</span>
                ))}
            </div>
            <div style={styles.achievements}>
                {match.achievements.map((achievement, i) => (
                    <p key={i} style={styles.achievement}>✓ {achievement}</p>
                ))}
            </div>
            <div style={styles.availability}>
                Available: {match.availability}
            </div>
            <button 
                onClick={() => handleConnect(match.id)}
                style={styles.connectButton}
            >
                Connect
            </button>
        </div>
    );

    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <div style={styles.content}>
                    <h1 style={styles.title}>AI-Powered Mentor Matching</h1>
                    
                    {/* Profile Form */}
                    <form onSubmit={handleProfileUpdate} style={styles.form}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Your Role</label>
                            <select 
                                value={userProfile.role}
                                onChange={(e) => setUserProfile(prev => ({
                                    ...prev,
                                    role: e.target.value
                                }))}
                                style={styles.input}
                            >
                                <option value="Entrepreneur">Entrepreneur</option>
                                <option value="Investor">Investor</option>
                                <option value="Mentor">Mentor</option>
                                <option value="Professional">Professional</option>
                            </select>
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Areas of Interest</label>
                            <input
                                type="text"
                                placeholder="e.g., AI, Blockchain, E-commerce"
                                onChange={(e) => setUserProfile(prev => ({
                                    ...prev,
                                    interests: e.target.value.split(',').map(i => i.trim())
                                }))}
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Experience Level</label>
                            <select
                                value={userProfile.experience}
                                onChange={(e) => setUserProfile(prev => ({
                                    ...prev,
                                    experience: e.target.value
                                }))}
                                style={styles.input}
                            >
                                <option value="Beginner">Beginner (0-2 years)</option>
                                <option value="Intermediate">Intermediate (3-5 years)</option>
                                <option value="Advanced">Advanced (5-10 years)</option>
                                <option value="Expert">Expert (10+ years)</option>
                            </select>
                        </div>

                        <button type="submit" style={styles.button} disabled={loading}>
                            {loading ? 'Finding matches...' : 'Find Matches'}
                        </button>
                    </form>

                    {/* Recommendations Section */}
                    {recommendations.length > 0 && (
                        <div style={styles.recommendationsSection}>
                            <h2 style={styles.subtitle}>Recommended Matches</h2>
                            <div style={styles.recommendationsGrid}>
                                {recommendations.map((match, index) => (
                                    <MatchCard key={index} match={match} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

const styles = {
    container: {
        padding: '40px',
        backgroundColor: colorPalette.background.dark,
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    content: {
        width: '95%', // Increased from maxWidth
        maxWidth: '1400px', // Increased from 1200px
        margin: '0 auto',
        padding: '20px',
    },
    matchScore: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: colorPalette.accent.blue,
        padding: '4px 8px',
        borderRadius: '12px',
        color: colorPalette.text.light,
        fontSize: '14px',
        fontWeight: '500',
        zIndex: 1,
    },
    title: {
        color: colorPalette.text.light,
        marginBottom: '32px',
        fontSize: '32px',
        textAlign: 'center',
    },
    form: {
        backgroundColor: colorPalette.background.main,
        padding: '32px',
        borderRadius: '16px',
        marginBottom: '40px',
        width: '100%',
        maxWidth: '800px', // Added max-width for form
        margin: '0 auto',
    },
    formGroup: {
        marginBottom: '24px',
    },
    label: {
        color: colorPalette.text.light,
        display: 'block',
        marginBottom: '8px',
        fontSize: '16px',
    },
    input: {
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        border: `2px solid ${colorPalette.text.muted}`,
        backgroundColor: colorPalette.background.dark,
        color: colorPalette.text.light,
        fontSize: '16px',
    },
    button: {
        backgroundColor: colorPalette.primary.main,
        color: colorPalette.text.light,
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
        width: '100%',
    },
    recommendationsSection: {
        marginTop: '40px',
    },
    subtitle: {
        color: colorPalette.text.light,
        marginBottom: '24px',
        fontSize: '24px',
    },
    recommendationsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // Increased card width
        gap: '32px', // Increased gap
        width: '100%',
    },
    matchCard: {
        backgroundColor: colorPalette.background.main,
        borderRadius: '16px',
        padding: '32px', // Increased padding
        textAlign: 'center',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    avatar: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        marginBottom: '16px',
    },
    matchName: {
        color: colorPalette.text.light,
        fontSize: '20px',
        marginBottom: '8px',
    },
    matchRole: {
        color: colorPalette.text.muted,
        marginBottom: '16px',
    },
    matchBio: {
        color: colorPalette.text.light,
        marginBottom: '24px',
    },
    connectButton: {
        backgroundColor: colorPalette.accent.green,
        color: colorPalette.text.light,
        padding: '8px 16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
    },
    matchHeader: {
        position: 'relative',
        marginBottom: '16px',
    },
    rating: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: colorPalette.accent.gold,
        padding: '4px 8px',
        borderRadius: '12px',
        color: colorPalette.text.light,
        fontSize: '14px',
    },
    skillsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '16px',
    },
    skillTag: {
        backgroundColor: colorPalette.primary.light,
        color: colorPalette.text.light,
        padding: '4px 12px',
        borderRadius: '12px',
        fontSize: '12px',
    },
    achievements: {
        textAlign: 'left',
        marginBottom: '16px',
    },
    achievement: {
        color: colorPalette.text.muted,
        fontSize: '14px',
        marginBottom: '4px',
    },
    availability: {
        color: colorPalette.accent.green,
        marginBottom: '16px',
        fontSize: '14px',
        fontWeight: '500',
    }
};

export default Mentor;