import React from 'react'; 
import { FlatList, StyleSheet } from 'react-native'; 
import TodoItem from './TodoItem'; 

export default function TodoList({ todos, editTodo, deleteTodo }) {
  return (
    <FlatList
      data={todos} 
      keyExtractor={(item) => item.id} 
      renderItem={({ item }) => (
        <TodoItem 
          todo={item} 
          editTodo={editTodo} 
          deleteTodo={deleteTodo} 
        />
      )}
      style={styles.list} 
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10, 
    paddingHorizontal: 10, // Added horizontal padding for better spacing
    backgroundColor: '#071952', // Background color to match your palette
    borderRadius: 10, // Rounded corners for the list
    flex: 1, // Allow the list to expand and fill available space
  },
});
