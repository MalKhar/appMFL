import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './main.stack';

const AppNavigator = createStackNavigator();

export const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator initialRouteName="main">
        <AppNavigator.Screen
          component={MainStack}
          name="main"
          options={{headerShown: false}}
        />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
};
