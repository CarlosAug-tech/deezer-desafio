import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

import GlobalStyle from './assets/Styles/global';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  </Provider>
);

export default App;
