import * as React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNavigator from './HomeNavigator';
import AccountNavigator from './AccountNavigator';
type BottomTabParamList = {
  default: undefined;
};

type BottomTabNavigationProps<
  T extends keyof BottomTabParamList = 'default'
> = BottomTabNavigationProp<BottomTabParamList, T>;

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: '#72c5d4',
        showLabel: true,
        style: {backgroundColor: 'gray'},
      }}
      options={{gestureEnabled: false}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'reorder-four' : 'reorder-four';
          } else if (route.name === 'Account') {
            iconName = focused ? 'ios-person' : 'ios-person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen component={HomeNavigator} name="Home" />
      <Tab.Screen component={AccountNavigator} name="Account" />
    </Tab.Navigator>
  );
}
