import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens';

export type RootStackParamsList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();
const MainNavigation = () => (
  <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default MainNavigation;
