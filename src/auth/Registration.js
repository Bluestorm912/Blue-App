import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient"; // Use this for gradient background
import { supabase } from "../../api/supabaseClient"; // Supabase client for authentication
import authstyles from "../styles/authstyles"; // Import the external styles from authstyles.js

function Registration() {
  // State variables to manage form inputs
  const [username, setUsername] = useState(""); // Username input state
  const [email, setEmail] = useState(""); // Email input state
  const [password, setPassword] = useState(""); // Password input state
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password input state

  const navigation = useNavigation(); // Hook to enable navigation between screens

  // Function to handle user registration using Supabase
  // async function signUpNewUser() {
  //   // Ensure that passwords match before proceeding
  //   if (password !== confirmPassword) {
  //     Alert.alert("Passwords do not match");
  //     return;
  //   }

  //   // Attempt to register the user via Supabase
  //   const { data, error } = await supabase.auth.signUp({
  //     email, // Email from the input
  //     password, // Password from the input
  //   });

  //   if (error) {
  //     // Handle registration error
  //     Alert.alert("Error during Registration:", error.message);
  //   } else {
  //     // If successful, notify the user to check their email
  //     Alert.alert(
  //       "Registration Successful! Please check your email for verification"
  //     );
  //     navigation.navigate("Login"); // Navigate to the login screen after successful registration
  //   }
  // }

  async function signUpNewUser() {
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        Alert.alert("Passwords do not match");
        return;
      }
    
      // Register the user using Supabase Auth (this handles email, password, etc.)
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
    
      if (signUpError) {
        // If there is an error during sign-up, display it
        throw new Error(signUpError.message);
      }
    
      // If registration is successful, insert additional data into your custom 'users' table
      if (data && data.user) {
        const { error: userInsertError } = await supabase
          .from('users')  // This refers to your custom 'users' table
          .insert([{ 
            id: data.user.id,       // Use the auth user's ID
            username,               // The username you collected
            email                   // The email from the sign-up form
          }]);
    
        if (userInsertError) {
          // Handle error when saving additional user data
          throw new Error(userInsertError.message);
        }
    
        // Success: Notify the user and navigate to login
        Alert.alert(
          "Registration Successful! Please check your email for verification"
        );
        navigation.navigate("Login");
    
      } else {
        throw new Error("Unable to complete registration");
      }
    
    } catch (error) {
      // Catch and handle any errors
      Alert.alert("Error:", error.message);
    }
    
    
  }

  return (
    // Apply LinearGradient for a background gradient effect
    <LinearGradient colors={["#001F3F", "#003D5B"]} style={authstyles.gradient}>
      {/* SafeAreaView ensures proper content rendering without overlapping system UI elements */}
      <SafeAreaView style={authstyles.container}>
        
        {/* Registration title */}
        <Text style={authstyles.title}>REGISTER</Text>

        {/* Username input field */}
        <TextInput
          style={authstyles.input} // Use external styles for input fields
          placeholder="Username" // Placeholder text
          placeholderTextColor="#EBF4F6" // Placeholder text color
          value={username} // Bind to state
          onChangeText={setUsername} // Update state on text change
        />

        {/* Email input field */}
        <TextInput
          style={authstyles.input} // Use external styles for input fields
          placeholder="Email" // Placeholder text
          placeholderTextColor="#EBF4F6" // Placeholder text color
          value={email} // Bind to state
          onChangeText={setEmail} // Update state on text change
          keyboardType="email-address" // Show email-optimized keyboard on mobile
        />

        {/* Password input field */}
        <TextInput
          style={authstyles.input} // Use external styles for input fields
          placeholder="Password" // Placeholder text
          placeholderTextColor="#EBF4F6" // Placeholder text color
          value={password} // Bind to state
          onChangeText={setPassword} // Update state on text change
          secureTextEntry // Hide password characters
        />

        {/* Confirm password input field */}
        <TextInput
          style={authstyles.input} // Use external styles for input fields
          placeholder="Confirm Password" // Placeholder text
          placeholderTextColor="#EBF4F6" // Placeholder text color
          value={confirmPassword} // Bind to state
          onChangeText={setConfirmPassword} // Update state on text change
          secureTextEntry // Hide password characters
        />

        {/* Register button */}
        <TouchableOpacity
          style={authstyles.button} // Use external styles for buttons
          activeOpacity={0.8} // Slight opacity change when pressed
          onPress={signUpNewUser} // Trigger the registration function on press
        >
          <Text style={authstyles.buttonText}>Register</Text>
        </TouchableOpacity>

        {/* Navigation prompt to sign in screen */}
        <Text style={authstyles.signUpPrompt}>
          Already have an account?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={authstyles.signUpText}>Sign In</Text>
          </TouchableOpacity>
        </Text>

      </SafeAreaView>
    </LinearGradient>
  );
}

export default Registration;
