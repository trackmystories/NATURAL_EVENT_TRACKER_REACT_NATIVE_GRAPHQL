import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, SeaLakeIce, SevereStorms, Wildfires, Volcanoes} from '../screens';

type HomeNavigatorParamList = {
  default: undefined;
};

const HomeTab = createStackNavigator<HomeNavigatorParamList>();

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
