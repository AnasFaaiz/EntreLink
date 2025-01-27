import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login-page.jsx';
import SignUp from "./components/SignUp.jsx";
import HomePage from './components/HomePage/HomePage-Main.jsx';
import Discover from './components/Discover/Discover-Main.jsx';
import Community from './components/Community/Community-Main.jsx';
import Events from './components/Events/Events-Main.jsx';
import Connections from './components/Connections/Connections-Main.jsx';
import Discussion from './components/Community/Discussion';
import Challenges from './components/Community/Challenges.jsx';
import Opportunity from './components/Community/Opportunity.jsx';

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
                <Route path="/EntreLink/Community/Discussion" element={<Discussion />} />
                <Route path="/EntreLink/Community/Challenges" element={<Challenges />} />
                <Route path="/EntreLink/Community/Opportunity" element={<Opportunity />} />
            </Routes>
        </Router>
    );
}

export default App;
