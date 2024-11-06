import React, { useContext} from "react";
import { View, Text, FlatList, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../src/styles/MainScreenStyle"; // Import the home screen styles
import { ThemeContext } from './models/ThemeContext'; // Import ThemeContext for dark mode support

// List of apps that will be displayed in the home screen
const apps = [
  { id: "1", name: "Todo App", route: "TodoNav", image: require("../assets/todo.png"), description: "Manage your daily tasks." },
  { id: "2", name: "Movie Finder", route: "MovieFinderNav", image: require("../assets/MovieFinder.png"), description: "Find details of your favorite movies." },
  { id: "3", name: "DarkMode", route: "DarkMode", image: require("../assets/darkmode.jpeg"), description: "Switch between light and dark themes." },
  { id: "4", name: "Blue Recipe", route: "DishNav", image: require("../assets/FoodRecipe.png"), description: "Explore delicious recipes." },
];
const MainScreen = () => {
  const navigation = useNavigation(); // Navigation to handle app redirection
  
// Access the current theme mode (dark/light) from ThemeContext
const { isDarkMode } = useContext(ThemeContext);



  // Function to handle the navigation when a user selects an app
  const openApp = (route) => {
    navigation.navigate(route); // Navigate to the selected app's screen
  };

  // Render each item (app) in the list
  const renderApp = ({ item }) => (
    <View style={styles.appItemContainer}>
      <Image source={item.image} style={styles.appImage} />
      <Text style={styles.appName}>{item.name}</Text>
      <Text style={styles.appDescription}>{item.description}</Text>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => openApp(item.route)}
      >
        <Text style={styles.buttonText}>Open</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '##0D0D0D' }]}>
      <Text style={styles.title}>Select an App</Text>
      <FlatList
        data={apps}
        renderItem={renderApp}
        keyExtractor={(item) => item.id}
        numColumns={2} // Set two columns for side-by-side layout
        contentContainerStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

export default MainScreen;







  