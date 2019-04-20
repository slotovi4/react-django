import * as React from 'react';
import Form from './Form';
import LeadsContainer from '../../containers/LeadsContainer';

const Dashboard = () => {
  return (
    <React.Fragment>
      <Form />
      <LeadsContainer />
    </React.Fragment>
  );
};

export default Dashboard;
