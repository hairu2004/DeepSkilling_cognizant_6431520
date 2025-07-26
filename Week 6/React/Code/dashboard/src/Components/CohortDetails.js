import React from 'react';
import styles from './CohortDetails.module.css';


function CohortDetails({ name, startDate, status }) {
  const statusStyle = {
    color: status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={statusStyle}>Cohort Status: {status}</h3>
      <dl>
        <dt>Name:</dt>
        <dd>{name}</dd>

        <dt>Start Date:</dt>
        <dd>{startDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
