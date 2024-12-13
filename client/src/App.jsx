import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login-page.jsx';
import SignUp from "./components/SignUp.jsx";
import HomePage from './components/Home-page.jsx';
import Articles from './components/Articles.jsx';
import Community from './components/Community.jsx';
import Events from './components/Events.jsx';
import Connections from './components/Connections.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/Articles" element={<Articles />} />
                <Route path="/Community" element={<Community />} />
                <Route path="/Events" element={<Events />} />
                <Route path="/Connections" element={<Connections />} />
            </Routes>
        </Router>
    );
}

export default App;
