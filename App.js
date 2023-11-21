
import { NavigationContainer }  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterScreen from './src/screens/authentication/RegisterScreen';
import WelcomeScreen from './src/screens/authentication/WelcomeScreen';
import LoginScreen from './src/screens/authentication/LoginScreen';
import MapScreen from './src/screens/home/mapa/mapainteiro';
import BottomTabs from './src/navigations/BottomTab';
import { StatusBar } from 'expo-status-bar';
import Configuracoes from './src/screens/configscreens/configurações';
import EditarPerfil from './src/screens/configscreens/editarperfil';
import Perfil from './src/screens/perfilscreen/perfil';
import PoliticasPrivacidade from './src/screens/configscreens/Politica';
import TermosDeUso from './src/screens/configscreens/Termos';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <StatusBar style="inverted" />
      <Stack.Navigator initialRouteName='Welcome'
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent', // Deixa o header transparente
        },
        headerTintColor: 'black', // Define a cor do texto do header
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Map" component={MapScreen} options = {{ headerShown : false}}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options = {{ headerShown : false}}/>
        <Stack.Screen name="Cadastro" component={RegisterScreen} options={{ headerShown : false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options = {{ headerShown : false}}/>
        <Stack.Screen name="BottomTabs" component={BottomTabs} options = {{ headerShown : false}}/>
        <Stack.Screen name="Configurações" component={Configuracoes} options = {{ headerShown : false}}/>
        <Stack.Screen name="Editar Perfil" component={EditarPerfil} options = {{ headerShown : false}}/>
        <Stack.Screen name="Perfil" component={Perfil} options = {{ headerShown : false}}/>
        <Stack.Screen name="Políticas de Privacidade" component={PoliticasPrivacidade} options = {{ headerShown : true}}/>
        <Stack.Screen name="Termos de Uso" component={TermosDeUso} options = {{ headerShown : true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
