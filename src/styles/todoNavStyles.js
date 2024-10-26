import { StyleSheet } from "react-native";

// Define the styles for the TodoNav component
export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#071952", // Dark background color for the tab bar
    paddingBottom: 5, // Padding at the bottom for better layout
    height: 60, // Height of the tab bar
    borderTopLeftRadius: 20, // Rounded corners on the top left
    borderTopRightRadius: 20, // Rounded corners on the top right
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 2, // Shadow radius
    elevation: 5, // Elevation for Android shadow effect
  },
  tabBarItem: {
    justifyContent: "center", // Center the tab icon and label
    alignItems: "center", // Align items in the center
  },
  tabLabel: {
    fontSize: 12, // Font size for the tab label
    marginBottom: 5, // Margin below the label
  },
});
