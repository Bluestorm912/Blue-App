import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet, SafeAreaView, RefreshControl } from 'react-native';
import { ThemeContext } from '../models/ThemeContext'; // Import ThemeContext for dark mode support

// Your OMDb API key
const apiKey = '58af348';

const MovieScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // Access the current theme mode (dark/light) from ThemeContext
  const { isDarkMode } = useContext(ThemeContext);

  // Fetch default movies when component loads
  useEffect(() => {
    fetchDefaultMovies();
  }, []);

  const fetchDefaultMovies = () => {
    setError(null);

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=Avengers`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setError(data.Error);
        }
      })
      .catch(() => {
        setError('An error occurred. Please try again.');
      });
  };

  const searchMovies = () => {
    setError(null);

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setError(data.Error);
        }
      })
      .catch(() => {
        setError('An error occurred. Please try again.');
      });
  };

  const getMovieDetails = (imdbID) => {
    setError(null);

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
      .then(response => response.json())
      .then(data => {
        navigation.navigate('MovieDetails', { movieDetails: data });
      })
      .catch(() => {
        setError('An error occurred. Please try again.');
      });
  };

  // Funtion to handle pull-to-refresh action
  const handleRefresh = () => {
    setRefreshing(true); // set refreshiing state to true while fetching new data
    fetchDefaultMovies(); //Fetch the default list of movies again
    setRefreshing(false); //Reset refreshing state once data is fetched
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFF' }]}
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>} 
    >
      <SafeAreaView>
        <Text style={styles.title}>Movie Finder</Text>
        <TextInput
          style={styles.input}
          placeholder="Search for movies"
          value={searchTerm}
          placeholderTextColor="#aaa"
          onChangeText={text => setSearchTerm(text)}
        />
        <Button title="Search Movies" onPress={searchMovies} color="#37B7C3" />
        {error && <Text style={styles.error}>{error}</Text>}
        <View style={styles.resultsContainer}>
          {movies.map(movie => (
            <View key={movie.imdbID} style={styles.movieCard}>
              <Image
                style={styles.poster}
                source={{ uri: movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150' }}
              />
              <View style={styles.movieInfo}>
                <Text style={styles.movieTitle}>{movie.Title}</Text>
                <Text style={styles.movieYear}>{movie.Year}</Text>
                <Button title="View Details" onPress={() => getMovieDetails(movie.imdbID)} color="#37B7C3" />
              </View>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#0B0014", // Dark background
  },
  input: {
    borderColor: '#37B7C3',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#fff', // Text color inside input
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "700",
    color: "#37B7C3", // Highlighted title color
    textAlign: "center",
  },
  resultsContainer: {
    marginTop: 20,
    marginBottom: 70,
  },
  movieCard: {
    backgroundColor: '#192a36', // Dark card background
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000', // Adding shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5, // Android shadow
  },
  poster: {
    width: 150,
    height: 200,
    marginBottom: 10,
    borderRadius: 8, // Slight rounding for images
    borderColor: '#37B7C3', // Border around the image
    borderWidth: 2,
  },
  movieInfo: {
    alignItems: 'center',
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#EBF4F6", // Movie title text color
    marginBottom: 5,
  },
  movieYear: {
    fontSize: 15,
    color: "#EBF4F6", // Year text color
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default MovieScreen;
