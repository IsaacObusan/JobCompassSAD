import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('Home'); // State for active tab

  // Function to render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <>
            {/* Slideshow Section */}
            <div className="slideshow-container">
              <div className="slideshow">
                <img src="/slide1.png" alt="Slide 1" />
                <img src="/slide2.png" alt="Slide 2" />
                <img src="/slide3.png" alt="Slide 3" />
              </div>
            </div>

            {/* Job Search Section */}
            <div className="job-search-section p-8">
              <h2 className="text-xl font-bold">Find Your Dream Job</h2>
              <div className="search-bar flex items-center mt-4">
                <input type="text" placeholder="Search jobs..." className="search-input" />
                <button className="mic-icon">
                  <img src="/mic-icon.png" alt="Mic" className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Job Cards Section */}
            <div className="job-cards flex justify-around mt-8">
              <div className="job-card">
                <h3 className="job-title font-bold">Software Engineer</h3>
                <p className="job-description">Develop and maintain web applications.</p>
                <button className="apply-button bg-mint text-white p-2 mt-4">Apply</button>
              </div>
              <div className="job-card">
                <h3 className="job-title font-bold">Data Analyst</h3>
                <p className="job-description">Analyze data to help companies make decisions.</p>
                <button className="apply-button bg-mint text-white p-2 mt-4">Apply</button>
              </div>
              <div className="job-card">
                <h3 className="job-title font-bold">UX/UI Designer</h3>
                <p className="job-description">Design user-friendly interfaces for apps and websites.</p>
                <button className="apply-button bg-mint text-white p-2 mt-4">Apply</button>
              </div>
            </div>
          </>
        );
      case 'About':
        return <div className="tab-content">Learn more about us in this About section.</div>;
      case 'Tutorials':
        return <div className="tab-content">Get in touch with us via the Contact section.</div>;
      default:
        return <div className="tab-content">Welcome to the Home Page!</div>;
    }
  };

  return (
    <div className="landing-page bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="header p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
        {/* Logo */}
        <img src="/Logo.png" alt="Logo" className="logo h-12" />

        {/* Tabs as clickable buttons */}
        <div className="tabs flex space-x-8">
          <button
            className={activeTab === 'Home' ? 'active-tab' : 'tab-item'}
            onClick={() => setActiveTab('Home')}
          >
            Home
          </button>
          <button
            className={activeTab === 'About' ? 'active-tab' : 'tab-item'}
            onClick={() => setActiveTab('About')}
          >
            About
          </button>
          <button
            className={activeTab === 'Contact' ? 'active-tab' : 'tab-item'}
            onClick={() => setActiveTab('Contact')}
          >
            Contact
          </button>
        </div>

        {/* Search Bar with Mic Icon */}
        <div className="search-bar flex items-center">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="mic-icon">
            <img src="/mic-icon.png" alt="Mic" className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="content-area p-8 mt-20">
        {renderContent()}
      </main>

      {/* Footer Section */}
      <footer className="footer bg-mint text-white p-8 flex flex-col items-center mt-auto">
        <div className="footer-text mb-4 text-center">
          <p>In partnership with:</p>
        </div>
        <div className="partnership-logos flex justify-center items-center space-x-7">
          <img src="/Pwd.png" alt="In Partnership with PWD" className="h-12" />
          <img src="/Labor.png" alt="In Partnership with Labor" className="h-12" />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

export {};
