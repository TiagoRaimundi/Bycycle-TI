import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import Report from "../screens/home/cadastrarproblema";

import Mapainteiro from "../screens/home/mapa/mapainteiro";
import InfoNavigation from "../screens/infoscreens/infoNavigation";

import { COLORS, SIZES } from "../../assets/constants";
import Perfil from "../screens/perfilscreen/perfil";

const Tab = createBottomTabNavigator();



export default function BottomTabs() {
  const navigation = useNavigation();
  const [isTyping, setIsTyping] = React.useState(false);

  const tabBarHeight = Platform.OS === 'ios' ? 0.1 * SIZES.height : 0.08 * SIZES.height;

  return (
    <Tab.Navigator
      initialRouteName="Mapa"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#cccccc",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: isTyping ? 'transparent' : COLORS.primary, // Deixa o tab bar transparente
          marginHorizontal: 0,
          alignContent: 'center',
          justifyContent: 'center',
          height: tabBarHeight, 
        },
      })}
      sceneContainerStyle={{
        flex: 1, // Adicione essa linha para preencher toda a área da tela
      }}
    >
      <Tab.Screen
        name="Info"
        component={InfoNavigation}
        options={{
          headerStyle: {
            height: 0.05 * SIZES.height,
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: "black",
          },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <Ionicons name="bookmark" size={22} color={color} />
                  <Text style={{ color: color, fontSize: 12 }}>Informações</Text>
                </>
              );
            }
            return (
              <>
                <Ionicons name="bookmark-outline" size={22} color={color} />
                <Text style={{ color: color, fontSize: 12 }}>Informações</Text>
              </>
            );
          },
        }}
      />

      <Tab.Screen
        name="Mapa"
        component={Mapainteiro}
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          headerStyle: {
            height: 0.05 * SIZES.height,
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: "black",
          },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <Ionicons name="home" size={22} color={color} />
                  <Text style={{ color: color, fontSize: 12 }}>Mapa</Text>
                </>
              );
            }
            return (
              <>
                <Ionicons name="home-outline" size={22} color={color} />
                <Text style={{ color: color, fontSize: 12 }}>Mapa</Text>
              </>
            );
          },
        }}
      />

      <Tab.Screen
        name="Fórum"
        component={Report}
        options={{
          headerShown: true,
          headerStyle: {
            height: 0.05 * SIZES.height,
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: "black",
          },
          tabBarVisible: !isTyping,
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <Ionicons name="add" size={22} color={color} />
                  <Text style={{ color: color, fontSize: 12 }}>Adicionar</Text>
                </>
              );
            }
            return (
              <>
                <Ionicons name="add-outline" size={22} color={color} />
                <Text style={{ color: color, fontSize: 12 }}>Adicionar</Text>
              </>
            );
          },

        }}
      />

    <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: true,
          headerStyle: {
            height: 0.05 * SIZES.height,
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: "black",
          },
          tabBarVisible: !isTyping,
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <Ionicons name="add" size={22} color={color} />
                  <Text style={{ color: color, fontSize: 12 }}>Perfil</Text>
                </>
              );
            }
            return (
              <>
                <Ionicons name="add-outline" size={22} color={color} />
                <Text style={{ color: color, fontSize: 12 }}>Perfil</Text>
              </>
            );
          },

        }}
      />

    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    left: 10,
    height: 35,
    width: 35,
    marginVertical: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  container2: {
    left: 10,
    height: 35,
    width: 35,
    marginVertical: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  }
});
