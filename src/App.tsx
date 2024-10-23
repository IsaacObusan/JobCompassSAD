import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LandingPage from './components/LandingPage';  // Import the LandingPage component
import CreateAccountForm from './components/CreateAccountForm';  // Import CreateAccountForm component
import EmployerDashboard from './components/EmployerDashboard';  // Import EmployerDashboard component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Root path shows the Login page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/signup" element={<CreateAccountForm />} /> {/* Signup/Create Account form */}
        <Route path="/landingpage" element={<LandingPage />} /> {/* Landing page for employees */}
        <Route path="/employerdashboard" element={<EmployerDashboard />} /> {/* Employer dashboard */}
      </Routes>
    </Router>
  );
};

export default App;




export {};
