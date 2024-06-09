import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import App from '../App';

const AppProvider = () => {
  return (
    <NavigationContainer independent={true}>
      <App />
    </NavigationContainer>
  );
};

export default AppProvider;
