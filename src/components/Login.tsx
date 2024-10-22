import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Import the CSS file from the components folder

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<'employee' | 'employer'>('employee'); // State for user type
  const navigate = useNavigate(); // Use navigate hook to redirect

  useEffect(() => {
    document.body.classList.add('login-page');

    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      // Redirect based on user type
      if (userType === 'employee') {
        navigate("/landingpage"); // Redirect to Employee Dashboard
      } else {
        navigate("/employerdashboard"); // Redirect to Employer Dashboard
      }
    } else {
      alert("Invalid username or password");
    }
  };

  const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(event.target.value as 'employee' | 'employer');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src="/Logo.png" alt="Logo" className="logo" /> {/* Left-Aligned Logo */}
        
        <p className="sign-up-caption">
          Don't have an account yet? <span className="sign-up-link" onClick={() => navigate('/signup')}>Sign up now</span>
        </p>
        
        <h2>Login</h2>
        
        <div className="user-type">
          <label>
            <input
              type="radio"
              value="employee"
              checked={userType === 'employee'}
              onChange={handleUserTypeChange}
            />
            Employee
          </label>
          <label>
            <input
              type="radio"
              value="employer"
              checked={userType === 'employer'}
              onChange={handleUserTypeChange}
            />
            Employer
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
export{}