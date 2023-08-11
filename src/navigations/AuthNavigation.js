import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer }  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/authentication/login';
import RegisterScreen from '../screens/authentication/RegisterScreen';
import DrawerNavigator from './Drawer';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} options = {{ headerShown : false}}/>
        <Stack.Screen name="Cadastro" component={RegisterScreen} options = {{ headerShown : false}}/>
        <Stack.Screen name="Home" component={DrawerNavigator}/>
    </Stack.Navigator>
}