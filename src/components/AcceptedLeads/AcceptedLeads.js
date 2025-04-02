import React, { useEffect, useState } from 'react';
import apiService from '../../services/apiService';

const AcceptedLeads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    apiService.getLeadsByStatus(1).then(setLeads);
  }, []);

  return (
    <div className="accepted-leads-container">
      <h1 className="title">Accepted Leads</h1>
      <div className="leads-grid">
        {leads.map((lead) => (
          <div key={lead.id} className="lead-card">
            <h3 className="lead-name">{lead.fullName}</h3>
            <p className="lead-info">Phone: {lead.phoneNumber}</p>
            <p className="lead-info">Email: {lead.email}</p>
            <p className="lead-info">Date Created: {lead.createDate}</p>
            <p className="lead-info">Suburb: {lead.suburb}</p>
            <p className="lead-info">Category: {lead.category}</p>
            <p className="lead-info">Description: {lead.description}</p>
            <p className="lead-price">Price: ${lead.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcceptedLeads;