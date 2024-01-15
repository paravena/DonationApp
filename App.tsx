import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
