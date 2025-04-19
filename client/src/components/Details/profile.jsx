import React, { useState } from 'react';
import colorPalette from '../colorPalette';
import Navbar from '../Navbar';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91 9876543210',
        role: 'Entrepreneur',
        company: 'Tech Startup Ltd',
        bio: 'Passionate about building innovative solutions',
        linkedin: 'linkedin.com/in/johndoe',
        twitter: 'twitter.com/johndoe',
        website: 'www.example.com',
        avatar: null,
        resume: null
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // You might want to handle the file differently than the avatar
            // For now, we'll store it in state similar to avatar
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileData(prev => ({
                    ...prev,
                    resume: {
                        name: file.name,
                        data: reader.result
                    }
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileData(prev => ({
                    ...prev,
                    avatar: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Show loading state
            const saveButton = e.target.querySelector('button[type="submit"]');
            saveButton.disabled = true;
            saveButton.textContent = 'Saving...';

            // Create FormData to handle file uploads
            const formData = new FormData();
            
            // Append all profile data
            Object.keys(profileData).forEach(key => {
                if (key === 'avatar' || key === 'resume') {
                    if (profileData[key] && profileData[key].data) {
                        formData.append(key, profileData[key].data);
                    }
                } else {
                    formData.append(key, profileData[key]);
                }
            });

            // Make API call to update profile
            const response = await fetch('/api/profile/update', {
                method: 'PUT',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            // Update successful
            setIsEditing(false);

            // Show success message
            alert('Profile updated successfully!');

        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        } finally {
            // Reset button state
            const saveButton = e.target.querySelector('button[type="submit"]');
            saveButton.disabled = false;
            saveButton.textContent = 'Save Changes';
        }
    };

    return (
        <>
            <Navbar />
            <div style={styles.container}>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.profileCard}>
                        {/* Header Section */}
                        <div style={styles.header}>
                            <h1 style={styles.title}>Profile Settings</h1>
                            {!isEditing ? (
                                <button 
                                    type="button"
                                    style={styles.editButton}
                                    onClick={() => setIsEditing(true)}
                                >
                                    Edit Profile
                                </button>
                            ) : (
                                <button 
                                    type="submit"
                                    style={styles.saveButton}
                                >
                                    Save Changes
                                </button>
                            )}
                        </div>
    
                        {/* Avatar Section */}
                        <div style={styles.avatarSection}>
                            <div style={styles.avatarWrapper}>
                                <img 
                                    src={profileData.avatar || '/default-avatar.png'} 
                                    alt="Profile" 
                                    style={styles.avatar}
                                />
                                {isEditing && (
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        style={styles.fileInput}
                                    />
                                )}
                            </div>
                        </div>
    
                        {/* Form Fields Section */}
                        <div style={styles.formGrid}>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={profileData.name}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    style={styles.input}
                                />
                            </div>
    
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={profileData.email}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    style={styles.input}
                                />
                            </div>
    
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={profileData.phone}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    style={styles.input}
                                />
                            </div>
    
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Role</label>
                                <input
                                    type="text"
                                    name="role"
                                    value={profileData.role}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    style={styles.input}
                                />
                            </div>
    
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={profileData.company}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    style={styles.input}
                                />
                            </div>
    
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Bio</label>
                                <textarea
                                    name="bio"
                                    value={profileData.bio}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    style={styles.textarea}
                                    rows="4"
                                />
                            </div>
    
                            <div style={styles.formGroup}>
                                <label style={styles.label}>LinkedIn</label>
                                <input
                                    type="url"
                                    name="linkedin"
                                    value={profileData.linkedin}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    style={styles.input}
                                />
                            </div>
    
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Twitter</label>
                                <input
                                    type="url"
                                    name="twitter"
                                    value={profileData.twitter}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    style={styles.input}
                                />
                            </div>
    
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Website</label>
                                <input
                                    type="url"
                                    name="website"
                                    value={profileData.website}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    style={styles.input}
                                />
                            </div>
    
                            {/* Resume Section */}
                            <div style={styles.resumeSection}>
                                <label style={styles.label}>Resume/CV</label>
                                <input
                                    type="file"
                                    id="resume-upload"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleResumeUpload}
                                    style={styles.resumeInput}
                                    disabled={!isEditing}
                                />
                                <label htmlFor="resume-upload" style={styles.resumeUploadButton}>
                                    {profileData.resume ? 'Change Resume' : 'Upload Resume'}
                                </label>
                                {profileData.resume && (
                                    <span style={styles.resumeFileName}>
                                        {profileData.resume.name}
                                    </span>
                                )}
                                <span style={styles.label}>
                                    Accepted formats: PDF, DOC, DOCX
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

const styles = {
    container: {
        position: 'absolute',
        left: '50%',
        top: '15vh',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '40px 20px',
        minHeight: 'calc(100vh - 64px)',
        backgroundColor: colorPalette.background.dark,
        width: '90%', 
        borderRadius: '16px',
    },
    profileCard: {
        backgroundColor: colorPalette.background.main,
        borderRadius: '16px',
        padding: '40px', // Increased from 32px
        boxShadow: `0 8px 24px ${colorPalette.utility.shadow}`,
        width: '90%',
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0',
    },
    title: {
        color: colorPalette.text.light,
        margin: 0,
        fontSize: '28px',
        fontWeight: '600',
    },
    editButton: {
        backgroundColor: colorPalette.primary.main,
        color: colorPalette.text.light,
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
    },
    saveButton: {
        backgroundColor: colorPalette.accent.green,
        color: colorPalette.text.light,
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
    },
    avatarSection: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '0',
    },
    avatarWrapper: {
        position: 'relative',
        width: '150px',
        height: '150px',
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
        border: `4px solid ${colorPalette.primary.main}`,
    },
    fileInput: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        opacity: 0,
        cursor: 'pointer',
    },
    formGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '50px',
    },
    form: {
        width: '100%',
        margin: '0 auto',  
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    label: {
        color: colorPalette.text.light,
        fontSize: '14px',
        fontWeight: '500',
    },
    input: {
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        border: `2px solid ${colorPalette.text.muted}`,
        backgroundColor: colorPalette.background.dark,
        color: colorPalette.text.light,
        fontSize: '16px',
        transition: 'border-color 0.3s ease',
        outline: 'none',
    },
    textarea: {
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        border: `2px solid ${colorPalette.text.muted}`,
        backgroundColor: colorPalette.background.dark,
        color: colorPalette.text.light,
        fontSize: '16px',
        transition: 'border-color 0.3s ease',
        outline: 'none',
        resize: 'vertical',
        minHeight: '120px',
    },
    bioGroup: {
        gridColumn: 'span 2', 
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',  
    },
    resumeSection: {
        gridColumn: 'span 2',
        padding: '24px',
        backgroundColor: colorPalette.background.dark,
        borderRadius: '8px',
        border: `2px dashed ${colorPalette.text.muted}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
    },
    resumeInput: {
        display: 'none',
    },
    resumeUploadButton: {
        backgroundColor: colorPalette.primary.main,
        color: colorPalette.text.light,
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
    },
    resumeFileName: {
        color: colorPalette.text.light,
        fontSize: '14px',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

export default Profile;