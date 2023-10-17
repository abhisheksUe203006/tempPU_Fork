import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import colors from "../../assets/css";
const { width, height } = Dimensions.get("window");

const LogoContainer = ({ st }) => {
  return (
    <View style={[styles.logoContainer, st]}>
      <Image
        source={require("../../assets/Panjab_University_logo.png")}
        style={styles.imageStyle}
      />
      <Text style={styles.heading}>Panjab University</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    // flex: 1,
    //   marginTop: 30,
    // marginBottom: responsiveHeight(2),
    // backgroundColor: "blue",
    // height: responsiveHeight(6),
    // width: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    height: responsiveHeight(15),
    width: responsiveWidth(30),
    marginBottom: responsiveHeight(2),
  },
  heading: {
    color: colors.color,
    fontSize: responsiveFontSize(3),
  },
});

export default LogoContainer;
