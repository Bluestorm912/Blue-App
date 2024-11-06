// Importing required libraries and components
import React, { useState, useEffect } from "react"; 
import { GestureHandlerRootView } from "react-native-gesture-handler"; 
// GestureHandlerRootView is necessary for handling gestures (like swiping) in React Native

import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
// createNativeStackNavigator is used to create a stack of screens with native animations

import * as Font from "expo-font"; 
// Importing the Font module from Expo to load custom fonts asynchronously

import { Text } from "react-native"; 
// Text component is used to display loading text while fonts are loading

// Importing screens for navigation
import Regs from "./Reg";
import TodoNav from "./TodoBottomNav";
import MovieFinderNav from "./MovieFinderNav";
import DarkMode from "../DarkMode";
import DishNav from "./DishNav";
import MainScreen from "../MainScreen";

// Initializing the stack navigator instance
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  // State to track if custom fonts have been loaded
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Function to load custom fonts asynchronously
  const loadFonts = async () => {
    await Font.loadAsync({
      MontserratBold: require("../../assets/font/Montserrat/static/Montserrat-Bold.ttf"),
      // Montserrat Bold font for custom styling
    });
  };

  // useEffect to load fonts once when the component mounts
  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true)); 
    // When fonts are loaded, update fontsLoaded state to true
  }, []);

  // Display a loading message until fonts are fully loaded
  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>; 
  }

  // Main stack navigator wrapped in GestureHandlerRootView for gesture support
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> 
      <Stack.Navigator>
        {/* Defining each screen in the navigator, with unique names and components */}
        <Stack.Screen
          name="Reg"
          component={Regs}
          options={{ headerShown: false }} 
          // Hide header for this screen
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DarkMode"
          component={DarkMode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TodoNav"
          component={TodoNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MovieFinderNav"
          component={MovieFinderNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DishNav"
          component={DishNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
};

// Exporting AppNavigation as the default export
export default AppNavigation;
