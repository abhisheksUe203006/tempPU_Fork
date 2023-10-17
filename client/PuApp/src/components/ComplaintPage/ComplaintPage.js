import { useEffect, useState, createContext } from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./Header";
import Body from "./Body";
import Gallery from "./Gallery/Gallery";
import { useRoute } from "@react-navigation/native";

export const ComplaintContext = createContext();

const Stack = createStackNavigator();
const ComplaintPage = () => {
  const route = useRoute();
  const data = route.params;
  const [image, setImage] = useState([]);

  return (
    <ComplaintContext.Provider value={{ image, setImage, data }}>
      <View style={styles.container}>
        <Header text={data.details} date={data.createdAt} st={styles.header} />

        <Stack.Navigator>
          <Stack.Screen
            name={"Body"}
            component={Body}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"Gallery"}
            component={Gallery}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </ComplaintContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: "15%",
  },
});
export default ComplaintPage;
