import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import MovieScreen from "../movieFinder/MovieHome";

import DetailScreen from "../movieFinder/MovieDetails";
import { FontAwesome } from "@expo/vector-icons"; // For tab icons
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();
const MovieFinderNav = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer independent= "true">

<Tab.Navigator
style={{marginTop: 30,}}
 initialRouteName="MovieScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "MovieScreen") {
            iconName = "film";
          } else if (route.name === "MovieDetails") {
            iconName = "connectdevelop";
          }

          // You can return any icon component here
          return <FontAwesome name={iconName} size={14} color={"#37B7C3"} />;
        },

        tabBarLabelStyle: {fontSize: 11,},
            
        
tabBarActiveTintColor: "#EBF4F6",
tabBarInactiveTintColor: "#1e90ff",

        tabBarStyle: {
          backgroundColor: "#071952", // Light background color
         
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      })}
    >

          <Tab.Screen name="MovieScreen" component={MovieScreen} />
          <Tab.Screen name="MovieDetails" component={DetailScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default MovieFinderNav;

const styles = StyleSheet.create({});
