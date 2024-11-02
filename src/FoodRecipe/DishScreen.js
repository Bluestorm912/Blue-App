import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
} from "react-native";

// Tasty API key
const apiKey = "b3c1fa54damsh4bd5d26856440fdp1a7763jsn20cec4f69866";
const apiHost = "tasty.p.rapidapi.com";

const DishScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // Fetch popular dishes on load
  useEffect(() => {
    fetchPopularDishes();
  }, []);

  const fetchPopularDishes = () => {
    setError(null);
    fetch(`https://${apiHost}/recipes/list?from=0&size=10&tags=popular`, {
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost,
      },
    })
      .then((response) => response.json())
      .then((data) => setDishes(data.results))
      .catch(() => setError("An error occurred. Please try again."));
  };

  const searchDishes = () => {
    setError(null);
    fetch(`https://${apiHost}/recipes/list?from=0&size=10&q=${searchTerm}`, {
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost,
      },
    })
      .then((response) => response.json())
      .then((data) => setDishes(data.results))
      .catch(() => setError("An error occurred. Please try again."));
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchPopularDishes();
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      <SafeAreaView>
        <Text style={styles.title}>Dish Finder</Text>
        <TextInput
          style={styles.input}
          placeholder="Search for dishes"
          placeholderTextColor="#aaa"
          onChangeText={(text) => setSearchTerm(text)}
        />
        <Button title="Search Dishes" onPress={searchDishes} color="#37B7C3" />
        {error && <Text style={styles.error}>{error}</Text>}
        <View style={styles.resultsContainer}>
          {dishes.map((dish) => (
            <View key={dish.id} style={styles.dishCard}>
              <Image
                style={styles.poster}
                source={{ uri: dish.thumbnail_url }}
              />
              <View style={styles.dishInfo}>
                <Text style={styles.dishTitle}>{dish.name}</Text>
                <Button
                  title="See More Details"
                  onPress={() =>
                    navigation.navigate("DishDetails", { dishDetails: dish })
                  }
                  color="#37B7C3"
                />
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
    backgroundColor: "#0B0014",
  },
  input: {
    borderColor: "#37B7C3",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "700",
    color: "#37B7C3",
    textAlign: "center",
  },
  resultsContainer: { marginTop: 20, marginBottom: 70 },
  dishCard: {
    backgroundColor: "#192a36",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  poster: {
    width: 150,
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: "#37B7C3",
    borderWidth: 2,
  },
  dishInfo: { alignItems: "center" },
  dishTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#EBF4F6",
    marginBottom: 5,
  },
  error: { color: "red", marginTop: 10 },
});

export default DishScreen;
