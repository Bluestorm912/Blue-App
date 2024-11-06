// Importing required components and libraries for navigation, styling, and icons
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"; 
// createMaterialTopTabNavigator is used to create a tabbed navigation at the top of the screen

import React from "react";
import MovieScreen from "../movieFinder/MovieHome"; 
// Importing the screen component for the main movie view

import DetailScreen from "../movieFinder/MovieDetails"; 
// Importing the screen component for movie details

import { FontAwesome } from "@expo/vector-icons"; 
// FontAwesome icons are used to display icons in each tab

import { GestureHandlerRootView } from "react-native-gesture-handler"; 
// GestureHandlerRootView enables gesture handling for this component

import { NavigationContainer } from "@react-navigation/native"; 
// NavigationContainer manages the navigation state for this tabbed view

// Initialize the tab navigator instance
const Tab = createMaterialTopTabNavigator();

const MovieFinderNav = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer independent="true">
        {/* Wrapping in NavigationContainer allows independent navigation state */}
        
        <Tab.Navigator
          style={{ marginTop: 30 }} // Adjusts top margin to create space at the top of the tabs
          initialRouteName="MovieScreen" // Set the initial tab to be displayed
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              
              // Set specific icons for each tab based on route name
              if (route.name === "MovieScreen") {
                iconName = "film"; // Icon for MovieScreen tab
              } else if (route.name === "MovieDetails") {
                iconName = "connectdevelop"; // Icon for MovieDetails tab
              }
              
              // Return the FontAwesome icon with specified size and color
              return <FontAwesome name={iconName} size={14} color={"#37B7C3"} />; 
              // Icon color: Light teal (#37B7C3)
            },
            
            tabBarLabelStyle: { fontSize: 11 }, // Font size for tab labels
            
            // Set active and inactive tab colors
            tabBarActiveTintColor: "#EBF4F6", // Light blue-gray (#EBF4F6) for active tabs
            tabBarInactiveTintColor: "#1e90ff", // Dodger blue (#1e90ff) for inactive tabs

            // Styling for the entire tab bar
            tabBarStyle: {
              backgroundColor: "#071952", // Dark navy background color (#071952)
            },
            
            // Style for individual tab items
            tabBarItemStyle: {
              justifyContent: "center", // Center aligns the icon and text
              alignItems: "center",
            },
          })}
        >
          {/* Defining individual screens for each tab */}
          <Tab.Screen name="MovieScreen" component={MovieScreen} />
          <Tab.Screen name="MovieDetails" component={DetailScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default MovieFinderNav;

const styles = StyleSheet.create({});
// Empty styles object; can be used for additional styling if needed
