import { View, TouchableOpacity, StyleSheet } from "react-native";
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

  return (
    <Tab.Navigator
      initialRouteName="Mapa"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#cccccc",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#2FAD8F",
          padding: 2,
          height: 50,
          borderRadius: 10,
          bottom: 10,
          marginHorizontal: 10,
          shadowOffset: {
            width: 10,
            height: 10,
          },
          shadowColor: "black",
          shadowOpacity: 1,
          elevation: 20,
        },
        
      })}
    >
      <Tab.Screen
        name="Informações"
        component={Info}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#2FAD8F",
            height: 100,
            borderRadius: 15,
          },
          headerTitleStyle: {
            color: "white",
          },
          
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="bookmark" size={22} color={color} />;
            }
            return <Ionicons name="bookmark-outline" size={22} color={color} />;
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
            borderRadius: 15,
          },
          headerTitleStyle: {
            color: "white",
          },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={22} color={color} />;
            }
            return <Ionicons name="home-outline" size={22} color={color} />;
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
        name="Reportar"
        component={Report}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#2FAD8F",
            height: 100,
            borderRadius: 15,
          },
          headerTitleStyle: {
            color: "white",
          },
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="add" size={40} color={color} />;
            }
            return <Ionicons name="add-outline" size={22} color={color} />;
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
            borderRadius: 15,
          },
          headerTitleStyle: {
            color: "white",
          },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={22} color={color} />;
            }
            return <Ionicons name="person-outline" size={22} color={color} />;
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
