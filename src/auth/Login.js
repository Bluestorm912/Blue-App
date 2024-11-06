// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Hook for navigation
import { LinearGradient } from "expo-linear-gradient"; // Linear gradient background
import * as Font from "expo-font"; // For loading custom fonts
import { supabase } from "../../api/supabaseClient"; // Supabase client for authentication
import authstyles from "../styles/authstyles"; // External stylesheet for styling


function SignIn() {
  // State variables for user inputs and status indicators
  const [email, setEmail] = useState(""); // Holds the email input value
  const [password, setPassword] = useState(""); // Holds the password input value
  const [fontsLoaded, setFontsLoaded] = useState(false); // Tracks font load status

  const navigation = useNavigation(); // Navigation hook to enable screen transitions

 // Async function to load custom fonts
 const loadFonts = async () => {
  await Font.loadAsync({
    Montserrat: require("../../assets/font/Montserrat/static/Montserrat-Bold.ttf"), // Montserrat font path
  });
};

// Load fonts only once when component mounts
useEffect(() => {
  loadFonts().then(() => setFontsLoaded(true)); // Sets fontsLoaded to true after loading
}, []);

// If fonts haven't loaded yet, return null to avoid rendering until ready
if (!fontsLoaded) {
  return null;
}

//   // Show splash screen first, and hide it after the timer or event
//   if (showSplash) {
//     return <SplashScreen onFinish={() => setShowSplash(false)} />; // Hide splash screen after it finishes
//   }

  // Function to handle user sign-in with Supabase authentication
  async function signInWithEmail() {
    const { error } = await supabase.auth.signInWithPassword({
      email, // Email state passed to Supabase
      password, // Password state passed to Supabase
    });

    // Handle errors or successful login
    if (error) {
      Alert.alert("Login Error:", error.message); // Display error message in an alert
    } else {
      Alert.alert("Login Successful"); // Display success message
      navigation.navigate("MainScreen"); // Navigate to MainScreen on success
    }
  }

  return (
// Linear gradient background
<LinearGradient colors={["#001F3F", "#003D5B"]} style={authstyles.gradient}>
{/* Dark blue gradient background from #001F3F to #003D5B */}

<SafeAreaView style={authstyles.container}>
  {/* SafeAreaView avoids overlap with the device's status bar */}
        
        {/* Title for the Sign In screen */}
        <Text style={authstyles.title}>LOG IN</Text>

        {/* Email input field */}
        <TextInput
          style={authstyles.input}
          placeholder="Email" // Placeholder text
          placeholderTextColor="#EBF4F6" // Placeholder color
          autoCapitalize="none" // Do not auto-capitalize email
          value={email} // Input value bound to state
          onChangeText={setEmail} // Update email state when text changes
        />

        {/* Password input field */}
        <TextInput
          style={authstyles.input}
          placeholder="Password" // Placeholder text for password
          placeholderTextColor="white" // Placeholder text color
          value={password} // Input value bound to state
          onChangeText={setPassword} // Update password state when text changes
          secureTextEntry // Hide password characters
        />

        {/* Sign In button */}
        <TouchableOpacity style={authstyles.button} activeOpacity={0.8} onPress={signInWithEmail}>
          <Text style={authstyles.buttonText}>Get Started</Text>
        </TouchableOpacity>

         {/* Sign Up prompt for users without an account */}
      <Text style={authstyles.signUpPrompt}>
        Don't have an account?{" "}
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text style={authstyles.signUpText}>Sign Up</Text> 
        </TouchableOpacity>
      </Text>

    
      </SafeAreaView>
    </LinearGradient>
  );
}

export default SignIn;





