import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import Navigation from "./src/navigations/appNavigation"; // Adjust path if needed
import { ThemeProvider, ThemeContext } from "./src/models/ThemeContext"; 

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

const ThemedApp = () => {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Navigation />
    </NavigationContainer>
  );
};
