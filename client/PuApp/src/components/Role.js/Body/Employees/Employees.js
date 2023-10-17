import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import employees from "../../../../screens/Assistant/employees";
import TabEmployees from "./TabEmployees";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Employees = () => {
  return (
    <View style={bodyStyles.listStyle}>
      <FlatList
        data={employees}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          // console.log(item);
          return <TabEmployees item={item} index={index} />;
        }}
      />
    </View>
  );
};

const bodyStyles = StyleSheet.create({
  listStyle: {
    flex: 1,
    zIndex: -1,
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(1.5),
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(2),
  },
});

export default Employees;
