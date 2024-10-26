import { StyleSheet } from "react-native";

const authstyles = StyleSheet.create({
  gradient: {
    flex: 1, // Full-screen gradient
  },
  container: {
    flex: 1, // Occupy full screen
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  title: {
    fontSize: 28, // Font size for title
    color: "#EBF4F6", // White color
    marginBottom: 30, // Space below the title
    fontFamily: "Montserrat", // Custom font
    fontWeight: "bold", // Bold text
  },
  input: {
    width: 250, // Input field width
    borderColor: "#37B7C3", // Border color
    borderWidth: 1, // Border width
    borderRadius: 25, // Rounded corners
    marginBottom: 15, // Space below each input field
    padding: 10, // Padding inside the input field
    color: "#EBF4F6", // Text color
    fontSize: 16, // Font size for input text
    backgroundColor: "#005D6E", // Background color
    textAlign: "center", // Center text inside the input
  },
  button: {
    backgroundColor: "#37B7C3", // Button background color
    paddingVertical: 12, // Vertical padding for button
    paddingHorizontal: 50, // Horizontal padding for button
    borderRadius: 25, // Rounded corners
    marginTop: 10, // Space above the button
    shadowColor: "#37B7C3", // Shadow color
    shadowOpacity: 0.4, // Shadow opacity
    shadowOffset: { width: 0, height: 4 }, // Shadow offset for elevation
    shadowRadius: 5, // Shadow radius for elevation
    elevation: 5, // Elevation to give the button depth
  },
  buttonText: {
    color: "#071952", // Button text color
    fontSize: 16, // Font size for button text
    fontWeight: "600", // Button text weight
    fontFamily: "Montserrat", // Custom font
  },
  signUpPrompt: {
    color: "white", // Text color for the prompt
    marginTop: 10, // Space above the prompt
  },
  signUpText: {
    color: "#EBF4F6", // Sign up link text color
    fontWeight: "bold", // Bold text for the link
  },
});

export default authstyles;
