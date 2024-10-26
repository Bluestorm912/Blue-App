import React, { useState } from 'react'; 
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker'; 

export default function TodoInput({ newTodo, setNewTodo, addTodo, updateTodo, selectedTodo, selectedTime, setSelectedTime }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedTime(date.getTime()); 
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add a new todo..."
        value={newTodo}
        onChangeText={setNewTodo}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={styles.buttonText}>Pick a time</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <TouchableOpacity
        style={[styles.button, styles.addButton]}
        onPress={selectedTodo ? updateTodo : addTodo}
      >
        <Text style={styles.buttonText}>{selectedTodo ? "Update Todo" : "Add Todo"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#071952',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    borderColor: '#37B7C3',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 25,
    color: '#EBF4F6',
    backgroundColor: '#005D6E',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#37B7C3',
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#2998EC',
  },
  buttonText: {
    color: '#071952',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
