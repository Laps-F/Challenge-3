import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import { Colors } from './constants/styles';

export type UnauthenticatedStackParams = {
  WelcomeScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
}

const Stack = createStackNavigator<UnauthenticatedStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="WelcomeScreen"
          component={WelcomeScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="SignUpScreen" 
          component={SignUpScreen} 
          options={{
            headerStyle: {backgroundColor: Colors.background},
            title: '',
            headerTintColor: Colors.primary,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            headerLeft: ()=> null,
            headerStyle: {backgroundColor: Colors.background},
            title: 'HOME',
            headerTintColor: Colors.primary,
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
