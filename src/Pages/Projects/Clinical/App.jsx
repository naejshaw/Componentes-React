import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PatientList from './components/PatientList';
import PatientDetail from './components/PatientDetail';
import AppointmentSchedule from './components/AppointmentSchedule';
import MedicalRecord from './components/MedicalRecord';
import BillingInsurance from './components/BillingInsurance';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PatientList} />
        <Route path="/patients/:id" component={PatientDetail} />
        <Route path="/appointments" component={AppointmentSchedule} />
        <Route path="/medical-records" component={MedicalRecord} />
        <Route path="/billing-insurance" component={BillingInsurance} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;