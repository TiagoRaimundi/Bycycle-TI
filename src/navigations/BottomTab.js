import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import Inicio from "../screens/home/inicio";
import Report from "../screens/home/cadastrarproblema";
import Info from "../screens/home/info";
import Perfil from "../screens/home/perfil";
import Mapainteiro from "../screens/home/mapa/mapainteiro";


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const navigation = useNavigation();
  const [isTyping, setIsTyping] = React.useState(false);

  return (
    <Tab.Navigator
  initialRouteName="Mapa"
  screenOptions={({ route }) => ({
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: "#cccccc",
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: isTyping ? 'transparent' : 'rgba(47, 173, 143, 1)', // Deixa o tab bar transparente
      padding: 2,
      height: 60,
      borderRadius: 0,
      marginHorizontal: 0,
    },
  })}
  sceneContainerStyle={{
    flex: 1, // Adicione essa linha para preencher toda a área da tela
  }}
>
      <Tab.Screen
        name="Informações"
        component={Info}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#2FAD8F",
            height: 100,
            borderRadius: 0,
          },
          
          headerTitleStyle: {
            color: "white",
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
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons name="menu" size={30} color="black" />
                
              </TouchableOpacity>
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
            backgroundColor: "#2FAD8F",
            height: 100,
            borderRadius: 0,
          },
          headerTitleStyle: {
            color: "white",
          },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <Ionicons name="home" size={22} color={color} />
                  <Text style={{ color: color, fontSize: 12 }}>Início</Text>
                </>
              );
            }
            return (
              <>
                <Ionicons name="home-outline" size={22} color={color} />
                <Text style={{ color: color, fontSize: 12 }}>Início</Text>
              </>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={styles.container}
                onPress={() => {
                  navigation.openDrawer();
                }}
              >
                <Ionicons name="menu" size={30} color="black" />
              </TouchableOpacity>
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
            backgroundColor: "#2FAD8F",
            height: 100,
            borderRadius: 0,
          },
          tabBarVisible: !isTyping,
          headerTitleStyle: {
            color: "white",
          },
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
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={styles.container}
                onPress={() => {
                  navigation.openDrawer();
                }}
              >
                <Ionicons name="menu" size={30} color="black" />
              </TouchableOpacity>
            );
          },
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#2FAD8F",
            height: 100,
            borderRadius: 0,
          },
          headerTitleStyle: {
            color: "white",
          },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <Ionicons name="person" size={22} color={color} />
                  <Text style={{ color: 'white', fontSize: 12 }}>Pessoa</Text>
                </>
              );
            }
            return (
              <>
                <Ionicons name="person-outline" size={22} color={color} />
                <Text style={{ color: color, fontSize: 12 }}>Pessoa</Text>
              </>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={styles.container}
                onPress={() => {
                  navigation.openDrawer();
                }}
              >
                <Ionicons name="menu" size={30} color="black" />
              </TouchableOpacity>
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
  container2:{
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
