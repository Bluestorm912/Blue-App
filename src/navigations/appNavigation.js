// src/navigations/appNavigation.js
import React, { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import { Text } from "react-native";
import Regs from "./Reg";
import TodoNav from "./TodoBottomNav";
import HomeScreen from "../Homescreen";
import MovieFinderNav from "./MovieFinderNav";
import DarkMode from "../DarkMode";
import DishNav from "./DishNav";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      MontserratBold: require("../../assets/font/Montserrat/static/Montserrat-Bold.ttf"),
    });
  };

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>; // Fallback while fonts are loading
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Reg"
            component={Regs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
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

        </Stack.Navigator>
      </NavigationContainer>

    </GestureHandlerRootView>
  );
};

export default AppNavigation;
