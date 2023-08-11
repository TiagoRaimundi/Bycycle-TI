import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer }  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterScreen from './src/screens/authentication/RegisterScreen';
import DrawerNavigator from './src/navigations/Drawer';

import WelcomeScreen from './src/screens/authentication/WelcomeScreen';
import LoginScreen from './src/screens/authentication/LoginScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options = {{ headerShown : false}}/>
        <Stack.Screen name="Cadastro" component={RegisterScreen} options = {{ headerShown : false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options = {{ headerShown : false}}/>
        <Stack.Screen name="Drawer" component={DrawerNavigator} options = {{ headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
