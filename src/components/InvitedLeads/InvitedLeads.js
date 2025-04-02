import React, { useEffect, useState } from 'react';
import LeadCard from '../LeadCard/LeadCard';
import apiService from '../../services/apiService';
import styles from './InvitedLeads.module.css';

const InvitedLeads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    apiService.getLeadsByStatus(0).then(setLeads);
  }, []);

  const handleAccept = async (lead) => {
    const updatedLead = { ...lead, status: 1 };
    await apiService.updateLead(updatedLead);
    setLeads(leads.filter((l) => l.id !== lead.id));
  };

  const handleDecline = async (lead) => {
    await apiService.updateLead({ ...lead, status: 2 });
    setLeads(leads.filter((l) => l.id !== lead.id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Invited Leads</h1>
      <div className={styles.grid}>
        {leads.map((lead) => (
          <LeadCard
            key={lead.id}
            lead={lead}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        ))}
      </div>
    </div>
  );
};

export default InvitedLeads;