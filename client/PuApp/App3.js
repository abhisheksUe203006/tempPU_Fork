import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Head from "./src/components/Head";
import { NavigationContainer } from "@react-navigation/native";
// import Tabs from "./src/components/Tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/loginScreen";

const Stack = createNativeStackNavigator();

export default function ProjectApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
