import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import colors from "../../../assets/css";
import DropDownSelector from "../User/DropDownSelector";
import { Feather } from "@expo/vector-icons";
import DropDownModal from "./DropDownModal";
import { userContext } from "./UserScreen";
import { roles, departments } from "../../components/heirarchy";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    department: useContext(userContext).dept,
  });

  const [isClickedRole, setIsClickedRole] = useState(false);
  const [isClickedDept, setIsClickedDept] = useState(false);

  const setDept = (val) => {
    setFormData({ ...formData, department: val });
  };
  const setRole = (val) => {
    setFormData({ ...formData, role: val });
  };
  const uri = "http://192.168.29.131:4000/employee/register_employee";
  console.log(roles, departments);
  console.log(roles.find((val) => formData.department === val));

  const handleChange = async (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      console.log(JSON.stringify(formData));
      const response = await fetch(uri, {
        method: "POST",
        body: JSON.stringify(formData),
        // body: formData,
        headers: { "Content-Type": "application/json" },
      });
      console.log("hello");
      const res = await response.text();
      console.log(res);
      if (res.ok) {
        console.log("Success");
      } else {
        console.log("Failure");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Employee</Text>
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        // behavior={Platform.OS === "ios" ? "padding" : "marginTop"}
        contentContainerStyle={styles.formContainer}
      >
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={formData.name}
          name={"name"}
          onChange={handleChange}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={formData.email}
          name={"email"}
          onChangeText={handleChange}
        />
        <TextInput
          keyboardType="phone-pad"
          style={styles.inputStyle}
          placeholder="Enter Phone Number"
          value={formData.phone}
          name={"phone"}
          onChangeText={handleChange}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Address"
          multiline={true}
          value={formData.address}
          name={"address"}
          onChangeText={handleChange}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          secure={true}
          value={formData.password}
          name={"password"}
          onChange={handleChange}
        />
        {/* <TextInput
          style={styles.inputStyle}
          placeholder="Confirm Password"
          secure={true}
          value={formData}
          onChangeText={(input) => {
            setFormData({ ...formData, address: input });
          }}
        /> */}

        {/* <DropDownSelector
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          selectedRole={dept}
          setSelectedRole={setDept}
          Data={data}
        /> */}
        <TouchableOpacity
          style={[styles.dropdownSelector, styles.inputStyle]}
          onPress={() => {
            setIsClickedRole(!isClickedRole);
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
            {`${formData.role}`}
          </Text>
          <Feather
            name={!isClickedRole ? "chevron-down" : "chevron-up"}
            size={25}
            color={"black"}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.inputStyle, styles.dropdownSelector]}
          onPress={() => {
            setIsClickedDept(!isClickedDept);
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
            {`${formData.department}`}
          </Text>
          <Feather
            name={!isClickedDept ? "chevron-down" : "chevron-up"}
            size={25}
            color={"black"}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        {isClickedDept && formData.dept !== departments[0] ? (
          <DropDownModal
            setVal={setDept}
            setIsClicked={setIsClickedDept}
            Data={departments}
          />
        ) : null}
        {isClickedRole ? (
          <DropDownModal
            setVal={setRole}
            setIsClicked={setIsClickedRole}
            Data={roles.slice(roles.find((val) => formData.department === val))}
          />
        ) : null}
        <TouchableOpacity style={styles.imageSelector}>
          <Feather name="camera" size={responsiveWidth(8)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.headerText}>Add</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    flexBasis: 100,
    backgroundColor: colors.color,
    height: "15%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: responsiveHeight(2),
    marginBottom: responsiveHeight(4),
  },
  headerText: {
    color: "white",
    fontWeight: "500",
    fontSize: responsiveFontSize(3),
  },
  formContainer: {
    // flex: 1,
    flexGrow: 1,
    alignItems: "center",
    // justifyContent: "center",

    marginTop: responsiveHeight(4),
  },

  inputStyle: {
    // placeholderTextColor: "gray",
    width: "90%",
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.2),
    height: responsiveHeight(7),
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(3),
    paddingTop: responsiveHeight(0.5),
    paddingBottom: responsiveHeight(0.5),
  },
  dropdownSelector: {
    flexDirection: "row",
    padding: responsiveWidth(1),
  },
  submitButton: {
    // position: "absolute",
    // bottom: responsiveHeight(2),
    backgroundColor: colors.color,
    width: "98%",
    borderRadius: responsiveWidth(2),
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveHeight(10),
    marginBottom: responsiveHeight(5),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
  },
  imageSelector: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveWidth(10),
    backgroundColor: colors.color,
    borderWidth: responsiveWidth(3),
    borderColor: colors.color,
    marginTop: responsiveHeight(5),
  },
  imageIconStyle: {
    borderRadius: responsiveWidth(10),
  },
});

export default AddEmployee;
