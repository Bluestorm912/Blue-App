import { StyleSheet } from "react-native";

const homestyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5", // Light background for the home screen
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 50,
    color: "#333", // Dark text color for the title
  },
  appItem: {
    backgroundColor: "#007BFF", // Blue background for each app button
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 200,
    alignItems: "center",
  },
  appName: {
    color: "#FFF", // White text for the app names
    fontSize: 18,
    fontWeight: "600",
  },
});

export default homestyles;
