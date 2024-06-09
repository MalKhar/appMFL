import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ProcessosRoutes} from '../routes/processos.routes';
import {FaqScreen} from '../../pages/Faq/containers/FaqScreen';
import {NewletterScreen} from '../../pages/Newletter/containers/NewletterScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const TabStack: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={ProcessosRoutes.Newslettler}
      screenOptions={({route}) => ({
        tabBarInactiveTintColor: '#777',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name={ProcessosRoutes.Faq}
        component={FaqScreen}
        options={() => ({
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name={'frequently-asked-questions'}
              size={size}
              color={color}
            />
          ),
          headerRight: () => (
            <Ionicons
              name={'notifications'}
              size={27}
              color={'white'}
              style={{marginRight: 14}}
            />
          ),
          title: 'F.A.Q',
          headerTintColor: '#FFFFFF',
          headerStyle: {
            backgroundColor: '#303345',
          },
          headerTitleAlign: 'center',
        })}
      />
      <Tab.Screen
        name={ProcessosRoutes.Newslettler}
        component={NewletterScreen}
        options={() => ({
          tabBarIcon: ({color, size}) => (
            <Icon name={'newspaper'} size={size} color={color} />
          ),

          headerRight: () => (
            <Ionicons
              name={'notifications'}
              size={27}
              color={'white'}
              style={{marginRight: 14}}
            />
          ),
          title: 'Notícias',
          headerTintColor: '#FFFFFF',
          headerStyle: {
            backgroundColor: '#303345',
          },
          headerTitleAlign: 'center',
        })}
      />
    </Tab.Navigator>
  );
};
