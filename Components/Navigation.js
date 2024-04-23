import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
//Pantallas
import homeScreen from "../Screens/homeScreen";
import settingsScreen from "../Screens/settingsScreen";
//import StackScreen from "./Screens/StackScreen";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#262323",
        tabBarStyle: {
          backgroundColor: "#8F9FBF",
        },

      }}
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        name="Calculo de Seguro Social y Seguro Educativo"
        component={homeScreen}
        options={{
          tabBarLabel: "Seguros",
          

          tabBarIcon: () => (
            <MaterialIcons
              name="payment"
              size={24}
              color="black"
              style={{
                backgroundColor: '#DCE4F2', 
                borderRadius: 5,
                padding: 5,
               
              }}
            />
          ),
          tabBarStyle: {
           
            backgroundColor: "#8F9FBF",
          },
        }}
      />

      <Tab.Screen
        name="Calculo de Decimo"
        component={settingsScreen}
        options={{
          tabBarLabel: "Decimo",
          tabBarIcon: () => (
            <FontAwesome6
              name="money-bills"
              size={24}
              color="black"
              style={{
                backgroundColor: '#DCE4F2', 
                borderRadius: 5,
                padding: 5,
              }}
            />
          ),
          
          tabBarStyle: {
            backgroundColor: "#8F9FBF",
          }

        }}
      />
    </Tab.Navigator>
  );
};


export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
