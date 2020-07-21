import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import store from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <>
        <ToastContainer autoClose={3000} position={toast.POSITION.TOP_LEFT} />
        <GlobalStyle />
        <Routes />
      </>
    </Provider>
  );
}

export default App;
