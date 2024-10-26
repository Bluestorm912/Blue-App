import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Import stack navigator for screen-to-screen navigation
import Login from "../auth/Login"; // Import the Loginn screen component
import Registration from "../auth/Registration"; // Import the Registration screen component


// Create a Stack navigator instance for managing navigation within this component
const Stack = createNativeStackNavigator();

function Regs() {
  // Return the stack navigator with each screen defined
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login" // Route name for the Signin screen
        component={Login} // Specify the component to render for this screen
        options={{ headerShown: false }} // Hide the header to make it full-screen
      />

      <Stack.Screen
        name="Registration" // Route name for the Registration screen
        component={Registration} // Specify the component to render for this screen
        options={{ headerShown: false }} // Hide the header to make it full-screen
      />

    </Stack.Navigator>
  );
}

export default Regs; // Export the Regs component as the default export