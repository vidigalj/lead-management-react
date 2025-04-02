import React, { useEffect, useState } from 'react';
import apiService from '../../services/apiService.tsx';
import Lead from '../../domain/Lead.tsx';
import styles from './AcceptedLeads.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faBriefcase, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const AcceptedLeads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    apiService.getLeadsByStatus(1).then((data) => {
      const leadInstances = data.map((lead) => new Lead(lead));
      setLeads(leadInstances);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Accepted Leads</h1>
      <div className={styles.grid}>
        {leads.map((leadData) => (
          <div key={leadData.id} className={styles.card}>
            <div className={styles['card-header']}>
              <div className={styles.icon}>{leadData.fullName.charAt(0)}</div>
              <div className={styles.details}>
                <p className={styles.name}>{leadData.firstName}</p>
                <p className={styles['card-date']}>Created: {leadData.createDate.toLocaleDateString()}</p>
              </div>
            </div>
            <div className={styles['card-body']}>
            <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} /> {leadData.suburb}
              </div>
              <div>
                <FontAwesomeIcon icon={faBriefcase} className={styles.icon} /> {leadData.category}
              </div>
              <div>
                <FontAwesomeIcon icon={faDollarSign} className={styles.icon} /> R${leadData.getFormattedPrice()}
              </div>
            </div>
            <div className={styles['card-body']}>
              <div>
                <FontAwesomeIcon icon={faPhone} className={styles.icon} /> {leadData.phoneNumber}
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> {leadData.email}
              </div>
            </div>            
            <div className={styles['card-footer']}>
              <p>{leadData.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcceptedLeads;