import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state';
import Repositories from './Repositories';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <Repositories />
      </div>
    </Provider>
  );
};

export default App;
