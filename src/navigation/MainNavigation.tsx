import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, Signup, SingleDonation } from '../screens';
import { CategoryItem } from '../lib';

export type RootStackParamsList = {
  Home: undefined;
  SingleDonation: {
    donationId: number;
    selectedCategory?: CategoryItem;
  };
  Login: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();
const MainNavigation = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ header: () => null, headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SingleDonation" component={SingleDonation} />
  </Stack.Navigator>
);

export default MainNavigation;
