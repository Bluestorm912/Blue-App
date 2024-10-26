import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function TodoListScreen({ navigation }) {
  const [todos, setTodos] = useState([]);
  const [username, setUsername] = useState("");

  // Function to load todos from AsyncStorage
  const loadTodos = async () => {
    const storedTodos = await AsyncStorage.getItem("todos");
    setTodos(storedTodos ? JSON.parse(storedTodos) : []);
  };

  // Load the username from AsyncStorage
  const loadUsername = async () => {
    const storedUsername = await AsyncStorage.getItem("username");
    setUsername(storedUsername || ""); // Set the username if available
  };

  // Reload todos and username whenever the screen comes back into focus
  useFocusEffect(
    React.useCallback(() => {
      loadTodos(); // Load todos when the screen is focused
      loadUsername(); // Load username when the screen is focused
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Welcome message with username */}
      {username ? (
        <Text style={styles.welcome}>Welcome, {username}!</Text>
      ) : null}

      <Text style={styles.title}>Todo List</Text>

      {/* Display the todo list */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <Text style={styles.todoTime}>
              {new Date(item.time).toLocaleString()}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#EBF4F6", // Light background for better contrast
  },
  welcome: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "700",
    color: "#1064AB", // Title color
    textAlign: "center",
  },
  todoItem: {
    padding: 10,
    borderBottomColor: "#0B0014",
    borderBottomWidth: 1,
    marginVertical: 5, // Space between todo items
  },
  todoText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#1064AB",
  },
  todoTime: {
    fontSize: 15,
    color: "#011E49",
  },
});
