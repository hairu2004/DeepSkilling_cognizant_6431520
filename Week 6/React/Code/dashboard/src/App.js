import React from 'react';
import './App.css';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div className="App">
      <CohortDetails
        name="React Bootcamp"
        startDate="2025-08-01"
        status="ongoing"
      />

      <CohortDetails
        name="Java Spring Cohort"
        startDate="2025-06-01"
        status="completed"
      />
    </div>
  );
}

export default App;
