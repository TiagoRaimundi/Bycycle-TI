import Info from "./info";
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Diferenca from "./Diferenca";
import Equipamentos from "./equipamentos";
import ItemDetailsEquipametos from "./equipamentos/ItemDetails";
import Leis from "./leis";
import ItemDetailsLeis from "./leis/ItemDetails";
import ItemDetailsDif from "./Diferenca/ItemDetails";

const Stack = createNativeStackNavigator();

const InfoNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Infos'>
        <Stack.Screen name="Infos" component={Info} options = {{ headerShown : false}}/>
        {/**DIFERENÇA */}
        <Stack.Screen name="Diferenca" component={Diferenca} options = {{ headerShown : false}}/>
        <Stack.Screen name="ItemDetailsDif" component={ItemDetailsDif} options = {{ headerShown : false}}/>
        {/**Equipamentos */}
        <Stack.Screen name="Equipamentos" component={Equipamentos} options = {{ headerShown : false}}/>
        <Stack.Screen name="ItemDetails" component={ItemDetailsEquipametos} options = {{ headerShown : false}}/>

        {/**Leis */}
        <Stack.Screen name="Leis" component={Leis} options = {{ headerShown : false}}/>
        <Stack.Screen name="ItemDetailsLeis" component={ItemDetailsLeis} options = {{ headerShown : false}}/>


    </Stack.Navigator>
  )
}

export default InfoNavigation;