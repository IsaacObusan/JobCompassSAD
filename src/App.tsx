import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LandingPage from './components/LandingPage';  
import CreateAccountForm from './components/CreateAccountForm';  
import SignupForm from './components/SignupForm';  
import EmployerDashboard from './components/EmployerDashboard';  
import TabContainer from './components/TabContainer';  // Import TabContainer

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Root path shows the Login page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/signup" element={<TabContainer />} /> {/* TabContainer for sign-up */}
        <Route path="/landingpage" element={<LandingPage />} /> {/* Landing page for employees */}
        <Route path="/employerdashboard" element={<EmployerDashboard />} /> {/* Employer dashboard */}
      </Routes>
    </Router>
  );
};

export default App;

export{}