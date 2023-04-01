import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import {Welcome} from './screens/welcome';
import {LogInPhone} from './screens/loginScreenPhone';
import {LogInPassword} from './screens/loginScreenPassword';
import {LogInName} from './screens/loginScreenName';
import {SignInPhone} from './screens/signinScreenPhone';
import {SignInPassword} from './screens/signinScreenPassword';

import {OnbordingStart} from './screens/onbordingScreenStart';
import {OnbordingHome} from './screens/onbordingHomeScreen';
import {OnbordingFingers} from './screens/onbordingScreenFingers';
import {OnbordingFingersValue} from './screens/onbordingScreenFingersValue';
import {OnbordingOneFinger} from './screens/onbordingScreenOneFinger';
import {OnbordingTwoFinger} from './screens/onbordingScreenTwoFinger';
import {OnbordingThreeFinger} from './screens/onbordingScreenThreeFinger';
import {OnbordingFourFinger} from './screens/onbordingScreenFourFinger';
import {OnbordingGestures} from './screens/onbordingScreenGestures';
import {OnbordingGesturesValue} from './screens/onbordingScreenGesturesValue';
import {OnbordingTouchGesture} from './screens/onbordingScreenTouchGesture';
import {OnbordingPinchGesture} from './screens/onbordingScreenPinchGesture';
import {OnbordingZoomGesture} from './screens/onbordingScreenZoomGesture';
import {OnbordingMoveGesture} from './screens/onbordingScreenMoveGesture';
import {OnbordingReactions} from './screens/onbordingScreenReactions';
import {OnbordingReactionsExtra} from './screens/onbordingScreenReactionsExtra';
import {OnbordingBot} from './screens/onbordingScreenBot';
import {OnbordingBotChat} from './screens/onbordingScreenBotChat';
import {OnbordingEnd} from './screens/onbordingScreenEnd';

import {Profile} from './screens/profileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer initialRouteName="Welcome">
        <Stack.Navigator>
          <Stack.Screen component={Welcome} name="Welcome" options={{headerShown: false}}/>
          <Stack.Screen component={LogInPhone} name="Login_1" options={{headerShown: false}}/>
          <Stack.Screen component={LogInPassword} name="Login_2" options={{headerShown: false}}/>
          <Stack.Screen component={LogInName} name="Login_3" options={{headerShown: false}}/>
          <Stack.Screen component={SignInPhone} name="Signin_1" options={{headerShown: false}}/>
          <Stack.Screen component={SignInPassword} name="Signin_2" options={{headerShown: false}}/>

          <Stack.Screen component={OnbordingStart} name="Onbording_1" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingHome} name="Onbording_2" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingFingers} name="Onbording_3" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingFingersValue} name="Onbording_4" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingOneFinger} name="Onbording_5" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingTwoFinger} name="Onbording_6" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingThreeFinger} name="Onbording_7" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingFourFinger} name="Onbording_8" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingGestures} name="Onbording_9" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingGesturesValue} name="Onbording_10" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingTouchGesture} name="Onbording_11" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingPinchGesture} name="Onbording_12" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingZoomGesture} name="Onbording_13" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingMoveGesture} name="Onbording_14" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingReactions} name="Onbording_15" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingReactionsExtra} name="Onbording_16" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingBot} name="Onbording_17" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingBotChat} name="Onbording_18" options={{headerShown: false}}/>
          <Stack.Screen component={OnbordingEnd} name="Onbording_19" options={{headerShown: false}}/>

          <Stack.Screen component={Profile} name="Profile" options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
