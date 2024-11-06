import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";

import { MaterialCommunityIcons } from '@expo/vector-icons'; // For tab icons
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import DishScreen from "../FoodRecipe/DishScreen";
import DishDetailsScreen from "../FoodRecipe/DishDetailScreen";

const Tab = createMaterialTopTabNavigator();
const DishNav = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer independent= "true">

<Tab.Navigator
style={{marginTop: 30,}}
 initialRouteName="MovieScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "DishScreen") {
            iconName = "food";
          } else if (route.name === "DishDetails") {
            iconName = "details";
          }

          // You can return any icon component here
          return <MaterialCommunityIcons name={iconName} size={20} color={"#37B7C3"} />;
        },

        tabBarLabelStyle: {fontSize: 11,},
            
        
tabBarActiveTintColor: "#EBF4F6",
tabBarInactiveTintColor: "#1e90ff",

        tabBarStyle: {
          backgroundColor: "#071952", // Light background color
         
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      })}
    >

          <Tab.Screen name="DishScreen" component={DishScreen} options={{ headerShown: false }} />
          <Tab.Screen name="DishDetails" component={DishDetailsScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default DishNav;

