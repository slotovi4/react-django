import * as React from 'react';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <div className='container'>
          <Dashboard />
        </div>
      </section>
    );
  }
}

export default App;
