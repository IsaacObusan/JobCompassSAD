import React, { useState } from 'react';
import './TabContainer.css';
import CreateAccountForm from './CreateAccountForm';
import SignupForm from './SignupForm';

const TabContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'employee' | 'employer'>('employee');

  const renderContent = () => {
    return activeTab === 'employee' ? <CreateAccountForm /> : <SignupForm />;
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        <button
          className={activeTab === 'employee' ? 'active' : ''}
          onClick={() => setActiveTab('employee')}
        >
          Employee
        </button>
        <button
          className={activeTab === 'employer' ? 'active' : ''}
          onClick={() => setActiveTab('employer')}
        >
          Employer
        </button>
      </div>
      <div className="form-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabContainer;

export{}
