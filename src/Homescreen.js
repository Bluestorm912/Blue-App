import React, { useContext} from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import homestyles from "./styles/homeStyles"; // Import the home screen styles
import { ThemeContext } from './models/ThemeContext'; // Import ThemeContext for dark mode support

// List of apps that will be displayed in the home screen
const apps = [
  { id: "1", name: "Todo App", route: "TodoNav" }, // Todo App route
  { id: "2", name: "Movie Finder", route: "MovieFinderNav" },// Movie Finder App route
  { id: "3", name: "DardMode", route: "DarkMode" },// Movie Finder App route
  
];

const HomeScreen = () => {
  const navigation = useNavigation(); // Navigation to handle app redirection
  
// Access the current theme mode (dark/light) from ThemeContext
const { isDarkMode } = useContext(ThemeContext);



  // Function to handle the navigation when a user selects an app
  const openApp = (route) => {
    navigation.navigate(route); // Navigate to the selected app's screen
  };

  // Render each item (app) in the list
  const renderApp = ({ item }) => (
    <TouchableOpacity
      style={homestyles.appItem} // Style for each app button
      onPress={() => openApp(item.route)} // Trigger navigation on press
    >
      <Text style={homestyles.appName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[homestyles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFF' }]}>
      <Text style={homestyles.title}>Select an App</Text>
      <FlatList
        data={apps} // Data to display (list of apps)
        renderItem={renderApp} // Render function for each item
        keyExtractor={(item) => item.id} // Unique key for each item
      />
    </View>
  );
};

export default HomeScreen;
