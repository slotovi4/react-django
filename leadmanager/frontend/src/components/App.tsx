import * as React from 'react';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

import { Provider } from 'react-redux';
import store from '../store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <section>
          <Header />
          <div className='container'>
            <Dashboard />
          </div>
        </section>
      </Provider>
    );
  }
}

export default App;
