import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import tasksData from "./tasksData";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import Header from "../../components/Role.js/Header/Header";
import Body from "../../components/Role.js/Body/Body";
import { userContext } from "./UserScreen";

const User = () => {
  const route = useRoute();
  // const screen = route.params.screen;
  const screen = "user";

  const [complaintsList, setComplaintsList] = useState([]);
  console.log(screen);
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setComplaintsList([]);
      };
    }, [])
  );

  console.log("hello");
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body
        complaintsList={complaintsList}
        setComplaintsList={setComplaintsList}
        screen={screen}
        context={userContext}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default User;
