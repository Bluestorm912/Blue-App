import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoScreen from "../todoApp/TodoScreen"; // Import Todo screen component
import AddTodoScreen from "../todoApp/AddTodoScreen"; // Import Add Todo screen component
import { FontAwesome } from "@expo/vector-icons"; // For using FontAwesome icons in the tab bar
import { Text } from "react-native"; // Import Text component for custom labels
import { styles } from "../styles/todoNavStyles"; // Import styles from a separate file

const Tab = createBottomTabNavigator(); // Create a bottom tab navigator

export default function TodoNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Configure the screen options for each tab
        tabBarIcon: ({ color, size }) => {
          // Choose the icon based on the route name (screen name)
          let iconName;

          if (route.name === "Home") {
            iconName = "home"; // Icon for the Home screen
          } else if (route.name === "My Todo") {
            iconName = "list"; // Icon for the My Todo screen
          }

          // Return the FontAwesome icon with the selected name, size, and color
          return <FontAwesome name={iconName} size={size} color={"#37B7C3"} />;
        },

        // Custom tab label, only visible when the tab is focused
        tabBarLabel: ({ focused }) => {
          if (focused) {
            let labelColor = focused ? "#EBF4F6" : "#1e90ff"; // Change label color if focused
            return (
              <Text style={[styles.tabLabel, { color: labelColor }]}>
                {route.name}
              </Text>
            );
          } else {
            return null; // No label when not focused
          }
        },

        tabBarStyle: styles.tabBar, // Apply custom tab bar style
        tabBarItemStyle: styles.tabBarItem, // Apply custom item style
      })}
    >
      <Tab.Screen
        name="Home" // Define Home tab
        component={AddTodoScreen} // Assign AddTodoScreen component to this tab
        options={{ headerShown: false }} // Hide the header
      />
      <Tab.Screen
        name="My Todo" // Define My Todo tab
        component={TodoScreen} // Assign TodoScreen component to this tab
        options={{ headerShown: false }} // Hide the header
      />
    </Tab.Navigator>
  );
}
