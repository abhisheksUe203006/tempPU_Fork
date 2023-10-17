import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
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
      <TouchableOpacity
        style={[styles.dropdownSelector, st]}
        onPress={() => {
          setIsClicked(!isClicked);
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: "500",
            flexGrow: 1,
            // width: "80%",
          }}
        >
          {`${selectedRole} `}
        </Text>
        <Feather
          name={!isClicked ? "chevron-down" : "chevron-up"}
          size={25}
          color={"black"}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>

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
          {/* <FlatList
            data={Data}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={styles.rolesItem}
                  onPress={() => {
                    setSelectedRole(item.name);
                    onSearch("");
                    setIsClicked(false);
                    // searchRef.current.clear();
                  }}
                >
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          ></FlatList> */}
          <ScrollView nestedScrollEnabled={true}>
            {Data.map((item) => {
              return (
                <TouchableOpacity
                  style={styles.rolesItem}
                  onPress={() => {
                    setSelectedRole(item.name);
                    onSearch("");
                    setIsClicked(false);
                    // searchRef.current.clear();
                  }}
                >
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexGrow: 1,
    backgroundColor: "blue",
    width: "100%",
  },
  dropdownSelector: {
    // flex: 1,
    width: "90%",
    height: responsiveHeight(5),
    // flexGrow: 1,
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.2),
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // flexBasis: "37%",
    // marginTop: 8,
    // marginBottom: 3.5,
    paddingLeft: responsiveWidth(2),
    paddingRight: responsiveWidth(2),
  },

  dropDownArea: {
    // position: "absolute",
    // top: responsiveHeight(4),
    // flex: 1,

    width: responsiveWidth(90),
    height: responsiveHeight(8),
    borderRadius: responsiveWidth(2),
    // marginTop: 1,
    backgroundColor: "#fff",
    elevation: 5,
    alignSelf: "flex-start",
    zIndex: 1,
  },
  searchInput: {
    width: "100%",
    // height: 35,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8e8e8e",
    alignSelf: "center",
    marginTop: 1,
    paddingLeft: 15,
  },
  rolesItem: {
    width: "100%",
    // height: responsiveHeight(5),
    // flexGrow: 1,
    borderBottomColor: "8e8e8e",
    borderBottomWidth: responsiveWidth(0.15),
    alignSelf: "flex-start",
    justifyContent: "center",
    paddingLeft: responsiveWidth(2),
    paddingTop: responsiveWidth(1),
    paddingBottom: responsiveWidth(1),
    // zIndex: 2,
  },
});

export default DropDownSelector;
