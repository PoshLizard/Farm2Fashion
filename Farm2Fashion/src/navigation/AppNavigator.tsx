import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ProductScreen } from '../screens/ProductScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ScannerScreen from '../screens/ScannerScreen';
import FootprintScreen from '../screens/FootprintScreen';
import AlternativesScreen from '../screens/AlternativesScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
  Scanner: undefined;
  Footprint: undefined;
  Home: undefined;
  Profile: undefined;
  Product: { productId: string };
  Locker: undefined;
  Alternatives: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="Footprint" component={FootprintScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Locker" component={HomeScreen} />
        <Stack.Screen name="Alternatives" component={AlternativesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 