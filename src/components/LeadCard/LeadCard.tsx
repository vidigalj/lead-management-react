import React from 'react';
import styles from './LeadCard.module.css';
import { faCheck, faTimes, faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lead from '../../domain/Lead.tsx';


const LeadCard = ({ leadData, onAccept, onDecline }) => {
  const lead = new Lead(leadData);
  return (
    <div className={styles.invitation}>
      <div className={styles['invitation-header']}>
        <div className={styles.icon}>{lead.firstName.charAt(0)}</div>
        <div className={styles.details}>
          <p className={styles.name}>{lead.firstName}</p>
          <p className={styles.date}>Created: {lead.createDate.toLocaleDateString()}</p>
        </div>
      </div>
      <div className={styles['invitation-body']}>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} /> {lead.suburb}
        </div>
        <div>
          <FontAwesomeIcon icon={faBriefcase} className={styles.icon} /> {lead.category}
        </div>
      </div>
      <div className={styles['invitation-body']}>
        <p>{lead.description}</p>
      </div>
      <div className={styles['invitation-footer']}>
        <button className={styles.accept} onClick={() => onAccept(lead)}>
          <FontAwesomeIcon icon={faCheck} /> Accept
        </button>
        <button className={styles.decline} onClick={() => onDecline(lead)}>
          <FontAwesomeIcon icon={faTimes} /> Decline
        </button>
      </div>
    </div>
  );
};

export default LeadCard;