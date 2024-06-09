import React from 'react';
import Navigator from './src/navigation';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </>
  );
};

export default App;
