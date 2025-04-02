import React, {useState} from 'react';
import InvitedLeads from './components/InvitedLeads/InvitedLeads';
import AcceptedLeads from './components/AcceptedLeads/AcceptedLeads';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('invited');

  return (
    <div className="app-container">
    <div className="tabs">
      <button
        className={`tab-button ${activeTab === 'invited' ? 'active' : ''}`}
        onClick={() => setActiveTab('invited')}
      >
        Invited
      </button>
      <button
        className={`tab-button ${activeTab === 'accepted' ? 'active' : ''}`}
        onClick={() => setActiveTab('accepted')}
      >
        Accepted
      </button>
    </div>
    <div className="tab-content">
      {activeTab === 'invited' && <InvitedLeads />}
      {activeTab === 'accepted' && <AcceptedLeads />}
    </div>
  </div>
  );
};

export default App;