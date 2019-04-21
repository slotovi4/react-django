import * as React from 'react';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import AlertsContainer from '../containers/AlertsContainer';

import { Provider } from 'react-redux';
import store from '../store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider
          template={AlertTemplate}
          timeout={3000}
          position='top center'
        >
          <section>
            <Header />
            <AlertsContainer />
            <div className='container'>
              <Dashboard />
            </div>
          </section>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
