import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "./Screens/SplashScreen";
import HomePage from "./Screens/HomePage";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "SplashScreen" component={SplashScreen} />
        <Stack.Screen name = "HomePage" component = {HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;