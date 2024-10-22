import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import EmployerDashboard from './components/EmployerDashboard'; // Import the EmployerDashboard component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Root path shows the Login page */}
        <Route path="/login" element={<Login />} />
        <Route path="/landingpage" element={<LandingPage />} /> {/* Correct path for landing page */}
        <Route path="/employerdashboard" element={<EmployerDashboard />} /> {/* Route for Employer Dashboard */}
      </Routes>
    </Router>
  );
};

export default App;

export {};
