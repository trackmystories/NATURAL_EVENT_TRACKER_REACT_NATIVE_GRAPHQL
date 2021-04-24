import * as React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Reset, Login, Register} from '../screens';
import {enableScreens} from 'react-native-screens';
enableScreens();

type AuthNavigatorParamList = {
  default: undefined;
};

type NativeStackNavigationProps<
  T extends keyof AuthNavigatorParamList = 'default'
> = NativeStackNavigationProp<AuthNavigatorParamList, T>;

const AuthTab = createNativeStackNavigator<AuthNavigatorParamList>();

export default function AuthNavigator(): JSX.Element {
  return (
    <AuthTab.Navigator>
      <AuthTab.Screen
        options={{gestureEnabled: false, headerShown: false}}
        component={Login}
        name="Login"
      />
      <AuthTab.Screen
        options={{gestureEnabled: false}}
        component={Reset}
        name="Reset"
      />
      <AuthTab.Screen
        options={{gestureEnabled: false}}
        component={Register}
        name="Register"
      />
    </AuthTab.Navigator>
  );
}
