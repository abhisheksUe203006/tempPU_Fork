import React, { useEffect, useContext, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import TabEmployees from "./TabEmployees";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { roleContext } from "../../../../screens/Assistant/AssistantScreen";

const uri = "http://192.168.29.131:4000/employee/getallemployeebydepartment";

const Employees = () => {
  const { dept } = useContext(roleContext);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // console.log(role);
    const fetchData = async () => {
      try {
        console.log("h");
        const response = await fetch(uri, {
          method: "POST",
          body: JSON.stringify({ role: "employee", dept }),
          // body: {id: _id, dept},
          headers: { "Content-Type": "application/json" },
        });
        console.log("hi");
        const res = await response.json();
        if (res.success) {
          setEmployees(res.data);
        }
      } catch (err) {
        alert(err.message);
      }
    };
    fetchData();
  }, []);

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
