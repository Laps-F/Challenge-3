import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';

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
            headerStyle: {backgroundColor: "#2D2D2D"},
            title: '',
            headerTintColor: "#D78F3C",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            headerLeft: ()=> null,
            headerStyle: {backgroundColor: "#2D2D2D"},
            title: 'HOME',
            headerTintColor: "#D78F3C",
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
