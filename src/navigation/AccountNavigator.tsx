import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import {Account} from '../screens';
import {TouchableOpacity} from 'react-native';
import {enableScreens} from 'react-native-screens';
enableScreens();

const Acc = createNativeStackNavigator();

function AccountNavigator() {
  return (
    <Acc.Navigator>
      <Acc.Screen
        options={{
          title: 'Account',
          headerHideShadow: true,
          gestureEnabled: false,
        }}
        name="Account"
        component={Account}
      />
    </Acc.Navigator>
  );
}

export default AccountNavigator;
