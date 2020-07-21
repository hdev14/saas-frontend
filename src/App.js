import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Router } from 'react-router-dom';

import store from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';

import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ToastContainer autoClose={3000} position={toast.POSITION.TOP_LEFT} />
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
