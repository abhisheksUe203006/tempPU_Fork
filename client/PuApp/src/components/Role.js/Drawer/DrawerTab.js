import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from "react-router-dom";
import AddEmployee from "../../../screens/Assistant/AddEmployee";

const DrawerTab = ({ title, iconName, component, navigation }) => {
  return (
    <TouchableOpacity
      style={tabStyle.btn}
      onPress={() => {
        navigation.navigate(component);
      }}
    >
      <Feather
        style={tabStyle.icon}
        name={iconName}
        size={responsiveWidth(6)}
      />
      <Text style={tabStyle.btnText}> {title} </Text>
      <Feather
        style={[tabStyle.icon, { marginTop: responsiveHeight(0.6) }]}
        name="chevron-right"
        size={responsiveWidth(4)}
      />
    </TouchableOpacity>
  );
};

const tabStyle = StyleSheet.create({
  btn: {
    flexDirection: "row",
    borderBottomWidth: responsiveWidth(0.3),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(2),
  },
  btnText: {
    // flexGrow: 3,
    width: "80%",
    fontSize: responsiveFontSize(2.5),
    // paddingBottom: responsiveHeight(1),
    fontWeight: "500",
    color: "#fa9387",
  },
  icon: {
    paddingTop: responsiveHeight(0.5),
    // flexGrow: 1,
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DrawerTab;
