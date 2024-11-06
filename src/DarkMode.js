import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useContext } from 'react';
import { ThemeContext } from './models/ThemeContext';


const DarkMode = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Use ThemeContext

  if (isDarkMode === undefined) {
    // This will help debug if the context is not available
    return <Text>Error: ThemeContext is not available.</Text>;
  }
  return (
    <View
    style={[
      styles.container,
      { backgroundColor: isDarkMode ? "#121212" : "#FFF" },
    ]}
    >
      <Text>HomeLearn</Text>
      <Text style={[styles.text, { color: isDarkMode ? "#FFF" : "#000" }]}>
        Dark Mode
      </Text>
      <Switch value={isDarkMode} onValueChange={toggleTheme} />
    </View>
  )
}

export default DarkMode

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});