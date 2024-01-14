import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {SignUpScreen} from '../screens/auth/SignUpScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen';
import type {RootStackParamList} from './types';
import {ForgotPasswordScreen} from '../screens/auth/ForgotPasswordScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
