import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import GlobalStyle from './styles/globals';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
