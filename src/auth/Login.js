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
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient"; // For gradient background
import * as Font from "expo-font"; // For custom font loading
import { supabase } from "../../api/supabaseClient"; // Supabase for authentication
import authstyles from "../styles/authstyles"; // Import external styles from authstyles.js

function SignIn() {
  // State variables for email, password, splash screen visibility, and font loading
  const [email, setEmail] = useState(""); // Email input state
  const [password, setPassword] = useState(""); // Password input state
  const [showSplash, setShowSplash] = useState(true); // Show splash screen initially

  const navigation = useNavigation(); // Navigation hook to navigate between screens

  // Async function to load fonts
  const loadFonts = async () => {
    await Font.loadAsync({
      Montserrat: require("../../assets/font/Montserrat/static/Montserrat-Bold.ttf"), // Load Montserrat font
    });
  };

  const [fontsLoaded, setFontsLoaded] = useState(false); // Font load status

  // Load fonts once when the component mounts
  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true)); // Set fontsLoaded to true after fonts are loaded
  }, []);

  // If fonts are not loaded yet, return null to avoid rendering incomplete UI
  if (!fontsLoaded) {
    return null;
  }

//   // Show splash screen first, and hide it after the timer or event
//   if (showSplash) {
//     return <SplashScreen onFinish={() => setShowSplash(false)} />; // Hide splash screen after it finishes
//   }

  // Function to handle user sign-in with Supabase
  async function signInWithEmail() {
    const { error } = await supabase.auth.signInWithPassword({
      email, // Email from the input
      password, // Password from the input
    });

    // Handle login error
    if (error) {
      Alert.alert("Login Error:", error.message); // Show error alert
    } else {
      Alert.alert("Login Successful"); // Show success alert
      navigation.navigate("HomeScreen"); // Navigate to the Todo screen on successful login
    }
  }

  return (
    <LinearGradient colors={["#001F3F", "#003D5B"]} style={authstyles.gradient}>
      {/* Use LinearGradient for background and apply styles */}
      <SafeAreaView style={authstyles.container}>
        {/* SafeAreaView to avoid overlaps with the device's status bar */}
        
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

        {/* Sign Up prompt */}
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
