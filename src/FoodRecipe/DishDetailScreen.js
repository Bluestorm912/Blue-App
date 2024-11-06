import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DishDetailsScreen = ({ route }) => {
  const { dishDetails } = route.params || {};

  if (!dishDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No dish details available</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          style={styles.poster}
          source={{ uri: dishDetails.thumbnail_url }}
          resizeMode="contain"
        />
        
        <View style={styles.detailBox}>
          <Text style={styles.title}>{dishDetails.name}</Text>
        </View>
        
        <View style={styles.detailBox}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.detailText}>
            {dishDetails.description || "No description available."}
          </Text>
        </View>
        
        <View style={styles.detailBox}>
          <Text style={styles.label}>Servings:</Text>
          <Text style={styles.detailText}>{dishDetails.num_servings}</Text>
        </View>


        <View style={styles.detailBox}>
          <Text style={styles.label}>Country:</Text>
          <Text style={styles.detailText}>{dishDetails.country || "Not available"}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Preparation Time (minutes):</Text>
          <Text style={styles.detailText}>
            {dishDetails.prep_time_minutes || "Not available"}
          </Text>
        </View>

        

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B0014" },
  scrollContent: { alignItems: "center", padding: 20 },
  poster: {
    width: 300,
    height: 390,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: "#37B7C3",
    borderWidth: 2,
  },
  detailBox: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#37B7C3",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#192A36",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#37B7C3",
    textAlign: "center",
  },
  label: { fontSize: 16, fontWeight: "bold", color: "#37B7C3" },
  detailText: { fontSize: 16, color: "#EBF4F6" },
  errorText: { fontSize: 18, color: "#FF5C5C" },
});

export default DishDetailsScreen;
