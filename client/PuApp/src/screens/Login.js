import { React, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Button,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import colors from "../../assets/css";
import LoginForm from "../components/LoginForm";
import LogoContainer from "../components/LogoContainer";
import HomePage from "../components/HomePage";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LogoContainer st={styles.logoStyle} />
      {/* <View style={styles.buttonContainer}>
        <Button
          color={"#c7291e"}
          title={"REPORT COMPLAINt"}
          style={styles.buttonSyle}
        />
        <Button color={"#c7291e"} title={"LOGIN"} style={styles.buttonStyle}
        onPress={()=>{

        }}  
        />
      </View> */}
      <HomePage navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
  },
  logoStyle: {
    marginTop: responsiveHeight(6),
    // flexGrow: 0.5,
  },
  // buttonContainer: {
  // display: "flex",
  //   flexGrow: 1,
  //   flexBasis: "auto",
  //   alignItems: "center",
  //   justifyContent: "space-around",
  //   paddingTop: 100,
  //   width: "100%",
  // },
  // buttonStyle: {
  //   borderRadius: 20,
  //   backgroundColor: "#c7291e",
  //   color: "white",
  // },
});

export default Login;
