import { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const TabEmployees = ({ item, index }) => {
  const [st, setSt] = useState({});
  return (
    <View style={[bodyStyles.itemContainer, st]}>
      <View style={bodyStyles.itemSelectButton}>
        <View style={bodyStyles.profileContainer}>
          <Image
            source={require("../../../../../assets/author-16.jpg")}
            style={{ height: responsiveHeight(7), width: responsiveWidth(18) }}
          />
          <View style={bodyStyles.nameContainer}>
            <Text>{item.name}</Text>
            <Text>{item.id}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={bodyStyles.itemOpenButton}>
        <Feather name="chevron-right" size={responsiveWidth(5)} />
      </TouchableOpacity>
    </View>
  );
};

const bodyStyles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    borderRadius: responsiveWidth(2),
    borderWidth: responsiveWidth(0.5),
    borderColor: "rgba(0,0,0,0)",
    elevation: responsiveWidth(1),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    marginTop: responsiveHeight(0.4),
    marginBottom: responsiveHeight(0.4),
    // marginTop()
    zIndex: -1,
  },
  itemSelectButton: {
    zIndex: -1,
    flexGrow: 4,
    paddingLeft: responsiveWidth(8),
  },
  profileContainer: { flexDirection: "row" },
  nameContainer: {
    alignItems: "center",
    paddingLeft: responsiveWidth(2),
    justifyContent: "center",
  },
  itemOpenButton: {
    flexGrow: 1,
    borderLeftWidth: responsiveWidth(0.2),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabEmployees;
