import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MainRoutes} from '../routes/main.routes';
import {TelaInicialScreen} from '../../pages/TelaInicial/containers/TelaInicialScreen';
import {ProcessosRoutes} from '../routes/processos.routes';
import {FaqScreen} from '../../pages/Faq/containers/FaqScreen';
import {TabStack} from './tab.stack';

const MainNavigator = createStackNavigator();

export const MainStack: React.FC = () => {
  return (
    <MainNavigator.Navigator initialRouteName={MainRoutes.Inicial}>
      <MainNavigator.Screen
        name={MainRoutes.Inicial}
        component={TelaInicialScreen}
        options={{headerShown: false}}
      />
      <MainNavigator.Screen
        name={ProcessosRoutes.Faq}
        component={FaqScreen}
        options={{headerShown: false}}
      />
      <MainNavigator.Screen
        component={TabStack}
        name="Processos"
        options={{headerShown: false}}
      />
    </MainNavigator.Navigator>
  );
};
