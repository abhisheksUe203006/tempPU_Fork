import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
// import roles from "../../assets/roles";
import colors from "../../../assets/css";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const DropDownSelector = ({
  isClicked,
  setIsClicked,
  selectedRole,
  setSelectedRole,
  Data,
  st,
}) => {
  // console.log("hi", st);
  // const [selectedRole, setSelectedRole] = useState("SELECT ROLE");
  // const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(Data);
  const searchRef = useRef();

  const onSearch = (txt) => {
    if (txt != "") {
      let tempData = data.filter((item) => {
        return item.name.toLowerCase().indexOf(txt.toLowerCase()) > -1;
      });
      setData(tempData);
    } else setData(Data);
  };

  return (
    <View styles={styles.container}>
      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={[styles.dropdownSelector, st]}
          onPress={() => {
            setIsClicked(!isClicked);
          }}
        >
          <Text style={{ color: "black", fontWeight: "500" }}>
            {`${selectedRole[0]} `}
          </Text>
          <Feather
            name={!isClicked ? "chevron-down" : "chevron-up"}
            size={25}
            color={"black"}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
      {isClicked ? (
        <View style={[styles.dropDownArea]}>
          {/* <TextInput
            ref={searchRef}
            placeholder="Search"
            style={styles.searchInput}
            onChangeText={(txt) => {
              onSearch(txt);
            }}
          ></TextInput> */}
          <FlatList
            data={Data}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={styles.rolesItem}
                  onPress={() => {
                    setSelectedRole([item.name, item.value]);
                    onSearch("");
                    setIsClicked(false);
                    // searchRef.current.clear();
                  }}
                >
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexGrow: 1,
    backgroundColor: "blue",
  },
  dropdownSelector: {
    // flex: 1,
    // width: "40%",
    height: responsiveHeight(5),
    // flexGrow: 1,
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.3),
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexBasis: "37%",
    // marginTop: 8,
    // marginBottom: 3.5,
    paddingLeft: responsiveWidth(2),
    paddingRight: responsiveWidth(2),
  },
  dropdownContainer: {
    width: "100%",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    marginRight: responsiveWidth(5),
  },
  dropDownArea: {
    position: "absolute",
    top: responsiveHeight(5),
    width: "90%",
    // height: 300,
    borderRadius: responsiveWidth(2),
    // marginTop: 1,
    backgroundColor: "#fff",
    elevation: 5,
    alignSelf: "flex-start",
    zIndex: 1,
  },
  searchInput: {
    width: "90%",
    height: 35,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8e8e8e",
    alignSelf: "center",
    marginTop: 1,
    paddingLeft: 15,
  },
  rolesItem: {
    width: "85%",
    height: responsiveHeight(5),
    borderBottomColor: "8e8e8e",
    borderBottomWidth: responsiveWidth(0.15),
    alignSelf: "center",
    justifyContent: "center",
    zIndex: 2,
  },
});

export default DropDownSelector;
