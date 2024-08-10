import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/patients')
      .then(response => {
        setPatients(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Patient List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {patients.map(patient => (
            <li key={patient.id}>
              <a href={`/patients/${patient.id}`}>
                {patient.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientList;