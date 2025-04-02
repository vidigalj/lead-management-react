import React, { useEffect, useState } from 'react';
import LeadCard from '../LeadCard/LeadCard.tsx';
import apiService from '../../services/apiService.tsx';
import styles from './InvitedLeads.module.css';
import Lead from '../../domain/Lead.tsx';

const InvitedLeads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    apiService.getLeadsByStatus(0).then(setLeads);
  }, []);

  const handleAccept = async (leadData) => {
    const updatedLead = { ...leadData, status: 1 };
    await apiService.updateLead(updatedLead);
    setLeads(leads.filter((l) => l.id !== leadData.id));
  };

  const handleDecline = async (leadData) => {
    await apiService.updateLead({ ...leadData, status: 2 });
    setLeads(leads.filter((l) => l.id !== leadData.id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Invited Leads</h1>
      <div className={styles.grid}>
        {leads.map((leadData) => (
          <LeadCard
            key={leadData.id}
            leadData={leadData}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        ))}
      </div>
    </div>
  );
};

export default InvitedLeads;