import React from 'react';
import styles from './LeadCard.module.css';

const LeadCard = ({ lead, onAccept, onDecline }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{lead.contactFirstName}</h3>
      <p className={styles.info}>Date Created: {lead.dateCreated}</p>
      <p className={styles.info}>Suburb: {lead.suburb}</p>
      <p className={styles.info}>Category: {lead.category}</p>
      <p className={styles.info}>Description: {lead.description}</p>
      <p className={styles.price}>Price: ${lead.price}</p>
      <div className={styles.actions}>
        <button className={styles.accept} onClick={() => onAccept(lead)}>
          Accept
        </button>
        <button className={styles.decline} onClick={() => onDecline(lead)}>
          Decline
        </button>
      </div>
    </div>
  );
};

export default LeadCard;