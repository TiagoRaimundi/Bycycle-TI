import Info from "./info";
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ciclofaixa from "./Diferenca/Ciclofaixa";
import Ciclovia from "./Diferenca/Ciclovia";
import CicloviaLei from "./leis/Ciclovia";
import Colar from "./leis/Colar";
import Fechadas from "./leis/Fechadas";
import Invasao from "./leis/Invasao";
import Prioridade from "./leis/Prioridade";
import Resumo from "./leis/Resumo";
import Leis from "./leis";
import Diferenca from "./Diferenca";
import Equipamentos from "./equipamentos";
import ItemDetails from "./equipamentos/ItemDetails";

const Stack = createNativeStackNavigator();

const InfoNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Infos'>
        <Stack.Screen name="Infos" component={Info} options = {{ headerShown : false}}/>
        {/**DIFERENÇA */}
        <Stack.Screen name="Ciclofaixa" component={Ciclofaixa} options = {{ headerShown : false}}/>
        <Stack.Screen name="Ciclovia" component={Ciclovia} options = {{ headerShown : false}}/>
        <Stack.Screen name="Diferenca" component={Diferenca} options = {{ headerShown : false}}/>

        {/**Equipamentos */}
        <Stack.Screen name="Equipamentos" component={Equipamentos} options = {{ headerShown : false}}/>
        <Stack.Screen name="ItemDetails" component={ItemDetails} options = {{ headerShown : false}}/>

        {/**Leis */}
        <Stack.Screen name="Leis" component={Leis} options = {{ headerShown : false}}/>
        <Stack.Screen name="CicloviaLei" component={CicloviaLei} options = {{ headerShown : false}}/>
        <Stack.Screen name="Colar" component={Colar} options = {{ headerShown : false}}/>
        <Stack.Screen name="Fechadas" component={Fechadas} options = {{ headerShown : false}}/>
        <Stack.Screen name="Invasao" component={Invasao} options = {{ headerShown : false}}/>
        <Stack.Screen name="Prioridade" component={Prioridade} options = {{ headerShown : false}}/>
        <Stack.Screen name="Resumo" component={Resumo} options = {{ headerShown : false}}/>

    </Stack.Navigator>
  )
}

export default InfoNavigation;