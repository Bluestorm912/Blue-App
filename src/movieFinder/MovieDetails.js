import React, {useContext} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../models/ThemeContext'; // Import ThemeContext for dark mode support

const DetailScreen = ({ route }) => {
  // Destructure movieDetails from route.params, with a fallback
  const { movieDetails } = route.params || {};

  // Access the current theme mode (dark/light) from ThemeContext
  const { isDarkMode } = useContext(ThemeContext);

  if (!movieDetails) {
    return (
      <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFF' }]}>
        <Text style={styles.errorText}>No movie details available</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFF' }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Movie Poster */}
        <Image
          style={styles.poster}
          source={{ uri: movieDetails.Poster !== 'N/A' ? movieDetails.Poster : 'https://via.placeholder.com/300x450' }}
          resizeMode="contain"
        />
        <View style={styles.detailBox}>
          <Text style={styles.title}>{movieDetails.Title}</Text>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.label}>Rating:</Text>
          <Text style={styles.detailText}>{movieDetails.Rated}</Text>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.label}>Genre:</Text>
          <Text style={styles.detailText}>{movieDetails.Genre}</Text>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.label}>Actors:</Text>
          <Text style={styles.detailText}>{movieDetails.Actors}</Text>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.label}>Plot:</Text>
          <Text style={styles.plot}>{movieDetails.Plot}</Text>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.label}>Year:</Text>
          <Text style={styles.detailText}>{movieDetails.Year}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0014', // Dark background
  },
  scrollContent: {
    alignItems: 'center',
    padding: 20,
  },
  poster: {
    width: 300,
    height: 390,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: '#37B7C3', // Border color for poster
    borderWidth: 2,
  },
  detailBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#37B7C3', // Border color
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#192A36', // Background color for each box
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#37B7C3', // Title color
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#37B7C3', // Label color
  },
  detailText: {
    fontSize: 16,
    color: '#EBF4F6', // Text color for details
  },
  plot: {
    lineHeight: 25,
    fontSize: 15,
    textAlign: 'justify',
    color: '#EBF4F6', // Plot text color
  },
  errorText: {
    fontSize: 18,
    color: '#FF5C5C', // Error color in red
  },
});

export default DetailScreen;
