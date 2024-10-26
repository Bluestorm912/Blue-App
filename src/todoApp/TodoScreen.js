import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TodoInput from "../components/todoComponents/TodoInputs";
import TodoList from "../components/todoComponents/TodoList";
import { scheduleTodoNotification } from "../components/todoComponents/NotificationHelper";
import Logout from "../components/Logout";
import { useNavigation } from "@react-navigation/native";


export default function TodoScreen() {
  const navigation = useNavigation();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const storedTodos = await AsyncStorage.getItem("todos");
    if (storedTodos) setTodos(JSON.parse(storedTodos));
  };

  const saveTodos = async (todos) => {
    await AsyncStorage.setItem("todos", JSON.stringify(todos));
    setTodos(todos);
  };

  const addTodo = async () => {
    if (newTodo.trim() === "") return;

    const todo = {
      id: Date.now().toString(),
      text: newTodo,
      time: selectedTime,
    };

    const updatedTodos = [...todos, todo];
    await saveTodos(updatedTodos);

    setNewTodo("");
    setSelectedTime(null);
    scheduleTodoNotification(todo.text, todo.time);
  };

  const editTodo = (todo) => {
    setSelectedTodo(todo);
    setNewTodo(todo.text);
  };

  const updateTodo = async () => {
    if (selectedTodo) {
      const updatedTodos = todos.map((todo) =>
        todo.id === selectedTodo.id ? { ...todo, text: newTodo } : todo
      );
      await saveTodos(updatedTodos);
      setSelectedTodo(null);
      setNewTodo("");
    }
  };

  const deleteTodo = async (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    await saveTodos(updatedTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TodoInput
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
        updateTodo={updateTodo}
        selectedTodo={selectedTodo}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      <TodoList
        todos={todos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
     
      <View style={{ marginBottom: 10 }}>
      
      </View>
      <Logout />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#EBF4F6", // Light background color for better visibility
    paddingBottom: 20,
  },

  movie: {
 textAlign: "center",
 fontFamily: "Montserrat",
 fontWeight: "bold",
  }
});
