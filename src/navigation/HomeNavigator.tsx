import * as React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Home, SeaLakeIce, SevereStorms, Wildfires, Volcanoes} from '../screens';
import {enableScreens} from 'react-native-screens';
enableScreens();

type HomeNavigatorParamList = {
  default: undefined;
};

type NativeStackNavigationProps<
  T extends keyof HomeNavigatorParamList = 'default'
> = NativeStackNavigationProp<HomeNavigatorParamList, T>;

const HomeTab = createNativeStackNavigator<HomeNavigatorParamList>();

export default function HomeNavigator(): JSX.Element {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen
        options={{gestureEnabled: false, headerShown: false}}
        component={Home}
        name="Home"
      />
      <HomeTab.Screen
        options={{gestureEnabled: false}}
        component={SeaLakeIce}
        name="Sea Lake Ice"
      />
      <HomeTab.Screen
        options={{gestureEnabled: false}}
        component={SevereStorms}
        name="Severe Storms"
      />
      <HomeTab.Screen
        options={{gestureEnabled: false}}
        component={Wildfires}
        name="Wildfires"
      />
      <HomeTab.Screen
        options={{gestureEnabled: false}}
        component={Volcanoes}
        name="Volcanoes"
      />
    </HomeTab.Navigator>
  );
}
