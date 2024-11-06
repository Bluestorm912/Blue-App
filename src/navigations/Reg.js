// Import stack navigator for managing navigation between screens
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

// Import screen components for login and registration
import Login from "../auth/Login"; // Login screen component
import Registration from "../auth/Registration"; // Registration screen component

// Create a Stack navigator instance for screen-to-screen navigation within this component
const Stack = createNativeStackNavigator();

function Regs() {
  // Define the stack navigator with two screens: Login and Registration
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login" // Route name for the Login screen
        component={Login} // Component to render for the Login screen
        options={{ headerShown: false }} // Hide the header for a full-screen appearance
      />

      <Stack.Screen
        name="Registration" // Route name for the Registration screen
        component={Registration} // Component to render for the Registration screen
        options={{ headerShown: false }} // Hide the header for a full-screen appearance
      />
      
    </Stack.Navigator>
  );
}

// Export the Regs component as the default export so it can be imported in other files
export default Regs;
