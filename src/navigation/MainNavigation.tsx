import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, SingleDonation } from '../screens';

export type RootStackParamsList = {
  Home: undefined;
  SingleDonation: {
    donationId: number;
  };
};

const Stack = createStackNavigator<RootStackParamsList>();
const MainNavigation = () => (
  <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SingleDonation" component={SingleDonation} />
  </Stack.Navigator>
);

export default MainNavigation;
