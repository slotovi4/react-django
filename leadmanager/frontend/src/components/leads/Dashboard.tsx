import * as React from 'react';
import LeadsContainer from '../../containers/LeadsContainer';
import FormContainer from '../../containers/FormContainer';

const Dashboard = () => (
  <React.Fragment>
    <FormContainer />
    <LeadsContainer />
  </React.Fragment>
);
export default Dashboard;
