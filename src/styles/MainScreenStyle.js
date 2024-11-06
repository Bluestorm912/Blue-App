import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 70,
    backgroundColor: "#0D0D0D", // Deep dark background for the entire screen
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#00FFCC", // Neon aqua color for the title
    marginBottom: 20,
  },
  appItemContainer: {
    backgroundColor: "#1A1A1A", // Darker card background
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    width: "45%",
    margin: "2.5%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    shadowColor: "#00FFCC", // Slight neon shadow effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  appImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#00FFCC", // Neon border for the image
  },
  appName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF", // Bright white for text contrast
    textAlign: "center",
    marginTop: 8,
    textShadowColor: "#00FFCC",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  appDescription: {
    fontSize: 12,
    color: "#AAAAAA", // Softer gray for the description text
    textAlign: "center",
    marginVertical: 6,
  },
  openButton: {
    backgroundColor: "#262626",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 5,
    marginTop: 10,
    borderColor: "#FF00FF", // Neon pink border for button
    borderWidth: 1,
  },
  buttonText: {
    color: "#00FFCC", // Neon aqua for button text
    fontWeight: "bold",
    fontSize: 12,
  },
  flatListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

export default styles;
