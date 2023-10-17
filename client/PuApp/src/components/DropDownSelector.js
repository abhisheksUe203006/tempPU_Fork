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
import roles from "../../assets/roles";
import colors from "../../assets/css";

const DropDownSelector = ({
  isClicked,
  setIsClicked,
  selectedRole,
  setSelectedRole,
  Data,
  st = {},
}) => {
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
    <View styles={[styles.container, st]}>
      <TouchableOpacity
        style={styles.dropdwonSelector}
        onPress={() => {
          setIsClicked(!isClicked);
        }}
      >
        <Text style={{ color: colors.color, fontWeight: "bold" }}>
          {selectedRole}
        </Text>
        <Feather
          name={!isClicked ? "chevron-down" : "chevron-up"}
          size={25}
          color={"black"}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
      {isClicked ? (
        <View style={styles.dropDownArea}>
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
          ></FlatList>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexGrow: 2,
  },
  dropdwonSelector: {
    width: "60%",
    height: 42,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 3.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  dropDownArea: {
    // width: "90%",
    height: 300,
    borderRadius: 10,
    // marginTop: 1,
    backgroundColor: "#fff",
    elevation: 5,
    alignSelf: "center",
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
    height: 50,
    borderBottomColor: "8e8e8e",
    borderBottomWidth: 0.2,
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default DropDownSelector;
