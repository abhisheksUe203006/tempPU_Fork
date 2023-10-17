import React, { useEffect, useState } from "react";
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
import { departments } from "../../components/heirarchy";
import { useParams } from "react-router-dom";
import { useNavigation, useRoute } from "@react-navigation/native";

const RegisterComplaint = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id, setRefresh } = route.params;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dept, setDept] = useState("Select Department");
  const [isClicked, setIsClicked] = useState(false);

  const form = {
    name,
    phone,
    address,
    dept,
    id,
    details: "nothing",
  };
  const uri = "http://192.168.29.131:4000/task/register";
  const handleSubmit = async () => {
    try {
      const response = await fetch(uri, {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
      const res = await response.json();
      console.log(res);
      if (res.ok) {
        console.log("Success");
        setRefresh((val) => !val);
        navigation.goBack();
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
        <Text style={styles.headerText}>Register Complaint</Text>
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        // behavior={Platform.OS === "ios" ? "padding" : "marginTop"}
        contentContainerStyle={styles.formContainer}
      >
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={name.inputText}
          onChangeText={(input) => {
            setName(input);
          }}
        />
        <TextInput
          keyboardType="phone-pad"
          style={styles.inputStyle}
          placeholder="Enter Phone Number"
          value={phone.inputText}
          onChangeText={(input) => {
            setPhone(input);
          }}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Address"
          multiline={true}
          value={address.inputText}
          onChangeText={(input) => {
            setAddress(input);
          }}
        />

        {/* <DropDownSelector
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          selectedRole={dept}
          setSelectedRole={setDept}
          Data={data}
        /> */}
        <TouchableOpacity
          style={[styles.dropdownSelector]}
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
            {`${dept} `}
          </Text>
          <Feather
            name={!isClicked ? "chevron-down" : "chevron-up"}
            size={25}
            color={"black"}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        {isClicked ? (
          <DropDownModal
            setVal={setDept}
            setIsClicked={setIsClicked}
            Data={departments}
          />
        ) : null}
        <TouchableOpacity style={styles.imageSelector}>
          <Feather name="camera" size={responsiveWidth(8)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.headerText}>Register</Text>
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
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(3),
    paddingTop: responsiveHeight(0.5),
    paddingBottom: responsiveHeight(0.5),
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
  submitButton: {
    // position: "absolute",
    // bottom: responsiveHeight(2),
    backgroundColor: colors.color,
    width: "98%",
    borderRadius: responsiveWidth(2),
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveHeight(25),
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

export default RegisterComplaint;
