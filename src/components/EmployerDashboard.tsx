import React, { useState } from 'react'; 
import './EmployerDashboard.css'; // Import the CSS file

const EmployerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <div className="content">Overview Content</div>;
      case 'jobs':
        return <div className="content">Jobs Content</div>;
      case 'candidates':
        return <div className="content">Candidates Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <header className="header">
        <img src="/Logo.png" alt="Logo" className="logo" /> {/* Use public path */}
        <nav className="tabs">
          <button
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`tab ${activeTab === 'jobs' ? 'active' : ''}`}
            onClick={() => setActiveTab('jobs')}
          >
            Jobs
          </button>
          <button
            className={`tab ${activeTab === 'candidates' ? 'active' : ''}`}
            onClick={() => setActiveTab('candidates')}
          >
            Candidates
          </button>
        </nav>
      </header>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default EmployerDashboard;

export {};
