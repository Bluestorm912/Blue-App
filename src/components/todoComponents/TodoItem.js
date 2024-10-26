import React from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 

export default function TodoItem({ todo, editTodo, deleteTodo }) {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{todo.text}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => editTodo(todo)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#071952', // Background color matching your palette
    borderRadius: 10,
    marginBottom: 10, // Spacing between todo items
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  todoText: {
    color: "#EBF4F6", // Text color for the todo item
    fontWeight: "700",
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 10,
    color: '#37B7C3', // Edit button color
    fontWeight: "700",
  },
  deleteButton: {
    color: '#D44D5C', // Delete button color
    fontWeight: "700",
  },
});
