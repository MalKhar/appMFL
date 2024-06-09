import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={{flexDirection: 'row', backgroundColor: '#fff', height: 50}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            key={route.key}>
            {label === 'F.A.Q' ? (
              <Icon
                name={isFocused ? 'home' : 'home-outline'}
                size={30}
                color={isFocused ? '#FF6347' : '#808080'}
              />
            ) : (
              <Icon
                name={isFocused ? 'newspaper' : 'newspaper-outline'}
                size={30}
                color={isFocused ? '#FF6347' : '#808080'}
              />
            )}
            <Text
              style={{color: isFocused ? '#FF6347' : '#808080', fontSize: 12}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
