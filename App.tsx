import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import DetailProductScreen from './screens/DetailProductScreen';
import ShoppingCartScreen from './screens/CartScreen';

import { Colors, NewColors } from './constants/styles';

import { UnauthenticatedStackParams } from './types/Navigation';

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
        <Stack.Screen 
          name="DetailProductScreen"
          component={DetailProductScreen}
          options={{
            headerStyle: {backgroundColor: NewColors.background, height: 50},
            title: '',
            headerTintColor: Colors.primary,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen 
          name="ShoppingCartScreen"
          component={ShoppingCartScreen}
          options={{
            headerLeft: ()=> null,
            headerStyle: {backgroundColor: NewColors.background},
            title: '',
            headerTintColor: Colors.primary,
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
