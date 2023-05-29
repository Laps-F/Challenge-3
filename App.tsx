import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import DetailProductScreen from './screens/DetailProductScreen';
import ShoppingCartScreen from './screens/CartScreen';

import { Colors, NewColors } from './constants/styles';
import { UnauthenticatedStackParams } from './types/Navigation';
import FavoritesContextProvider from './store/context/FavoriteProducts';


const Stack = createStackNavigator<UnauthenticatedStackParams>();
const Tab = createBottomTabNavigator<UnauthenticatedStackParams>();

export default function App() {
  return (
    <FavoritesContextProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="WelcomeScreen"
              component={WelcomeScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="MainTabNavigator"
              component={MainTabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="SignUpScreen"
              component={SignUpScreen}
              options={{
                headerStyle: { backgroundColor: Colors.background },
                title: '',
                headerTintColor: Colors.primary,
                headerShadowVisible: false,
              }}
            />
            <Stack.Screen name="DetailProductScreen"
              component={DetailProductScreen}
              options={{
                headerStyle: { backgroundColor: NewColors.background, height: 50 },
                title: '',
                headerTintColor: Colors.primary,
                headerShadowVisible: false,
              }}
            />
          </Stack.Navigator>
          <StatusBar style="light" />
        </NavigationContainer>
      </Provider>
    </FavoritesContextProvider>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={
        { headerShown: false, }
      }
    >
      <Tab.Screen name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen name="ShoppingCartScreen"
        component={ShoppingCartScreen}
      />
    </Tab.Navigator>
  );

}