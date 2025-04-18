import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login-page.jsx';
import SignUp from "./components/SignUp.jsx";
import HomePage from './components/HomePage/HomePage-Main.jsx';
import Discover from './components/Discover/Discover-Main.jsx';
import Community from './components/Community/Community-Main.jsx';
import Events from './components/Events/Events-Main.jsx';
import Connections from './components/Connections/Connections-Main.jsx';
import Discussion from './components/Community/Discussion.jsx';
import Challenges from './components/Community/Challenges/Challenges.jsx';
import Opportunity from './components/Community/Opportunity.jsx';
import News from './components/News/News-Main.jsx';
import Profile from './components/Details/profile.jsx';
import Mentor from './components/Details/Mentor.jsx';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/EntreLink/signup" element={<SignUp />} />
                <Route path="/EntreLink" element={<LoginPage />} />
                <Route path="/EntreLink/homepage" element={<HomePage />} />
                <Route path="/EntreLink/Discover" element={<Discover />} />
                <Route path="/EntreLink/Community" element={<Community />} />
                <Route path="/EntreLink/Events" element={<Events />} />
                <Route path="/EntreLink/Connections" element={<Connections />} />
                <Route path="/EntreLink/Discussion" element={<Discussion />} />
                <Route path="/EntreLink/Challenges" element={<Challenges />} />
                <Route path="/EntreLink/Opportunity" element={<Opportunity />} />
                <Route path="/EntreLink/News" element={<News />} />
                <Route path="/EntreLink/Profile" element={<Profile />} />
                <Route path="/EntreLink/my_mentor" element={<Mentor />} />
            </Routes>
        </Router>
    );
}

export default App;
