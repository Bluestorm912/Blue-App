// Import necessary libraries and components
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
// Bottom tab navigator for a tab bar at the bottom of the screen

import TodoScreen from "../todoApp/TodoScreen"; // Todo screen component for listing tasks
import AddTodoScreen from "../todoApp/AddTodoScreen"; // Component for adding new tasks
import { FontAwesome } from "@expo/vector-icons"; // FontAwesome icons for tab bar icons
import { Text } from "react-native"; // Text component for custom tab labels
import { styles } from "../styles/todoNavStyles"; // Custom styles for the tab navigator

// Create a bottom tab navigator instance
const Tab = createBottomTabNavigator();

export default function TodoNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Screen options for each tab, configured based on the route (screen) name

        tabBarIcon: ({ color, size }) => {
          // Define icon based on the current route (screen) name
          let iconName;

          if (route.name === "Home") {
            iconName = "home"; // Icon for the Home tab
          } else if (route.name === "My Todo") {
            iconName = "list"; // Icon for the My Todo tab
          }

          // Return a FontAwesome icon with the specified name, size, and color
          return <FontAwesome name={iconName} size={size} color={"#37B7C3"} />;
          // Icon color: Light teal (#37B7C3)
        },

        // Define custom label for each tab, shown only when the tab is focused
        tabBarLabel: ({ focused }) => {
          if (focused) {
            let labelColor = focused ? "#EBF4F6" : "#1e90ff"; // Color for focused label: light blue-gray (#EBF4F6)
            return (
              <Text style={[styles.tabLabel, { color: labelColor }]}>
                {route.name}
              </Text>
            );
          } else {
            return null; // No label when the tab is not focused
          }
        },

        tabBarStyle: styles.tabBar, // Apply custom style to the entire tab bar
        tabBarItemStyle: styles.tabBarItem, // Apply custom style to each tab item
      })}
    >
      {/* Define individual tabs with their respective components */}
      <Tab.Screen
        name="Home" // Tab for the AddTodoScreen
        component={AddTodoScreen} // Component that allows users to add tasks
        options={{ headerShown: false }} // Hide the header for a cleaner look
      />
      <Tab.Screen
        name="My Todo" // Tab for the TodoScreen
        component={TodoScreen} // Component that lists all tasks
        options={{ headerShown: false }} // Hide the header for a cleaner look
      />
    </Tab.Navigator>
  );
}
