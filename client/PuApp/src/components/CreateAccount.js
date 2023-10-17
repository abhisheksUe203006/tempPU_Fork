import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  FlatList,
  Keyboard,
} from "react-native";
import { StackActions } from '@react-navigation/native';
import Constants from "expo-constants";
const { manifest } = Constants;
import { buttons, colors } from "../../assets/css";
import DropDownSelector from "./DropDownSelector";
import LogoContainer from "./LogoContainer";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { roles, dept } from "../../assets/roles";


const CreateAccount = ({  }) => {
  const [name, setName] = useState("");
  const [mob, setMob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [selectedValue, setSelectedValue] = useState("Option 1");
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [haveAccount, setHaveAccount] = useState(false);
  const [showDeptButton, setShowDeptButton] = useState(false);

  const [selectedRole, setSelectedRole] = useState("resident");
  const [isClicked, setIsClicked] = useState(false);
  const [selectedDept, setSelectedDept] = useState("SELECT DEPARTMENT");
  const [isDeptClicked, setIsDeptClicked] = useState(false);
  const navigation=useNavigation();

  // if (haveAccount) {
  //   return <Login />;

  // }

  const handleSignUp = async () => {
    const form = {
      name: name,
      email: email,
      password: password,
      mobile: mob,
      role: selectedRole,
    };
    console.log(JSON.stringify(form));
    // const uri = `http://${manifest.debuggerHost
    //   .split(":")
    //   .shift()}:3000/auth/register/`;
    const uri = "http://192.168.133.67:4000/auth/register";
    console.log(uri);
    try {
      const response = await fetch(uri, {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
      // console.log(res);
      const res = await response.json();
      // console.log(res);
      if (res.ok) {
        console.log("valid", res);
        navigation.dispatch({
          ...StackActions.replace("UserScreen", res.savedUser),
          target: navigation.getState().key,
        });
      } else console.log("invalid");
    } catch (err) {
      console.log('here',err);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboard(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboard(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const data = [
    { id: 1, val: "name", state: name, setState: setName },
    { id: 2, val: "email", state: email, setState: setEmail },
    { id: 3, val: "mobile number", state: mob, setState: setMob },
    { id: 4, val: "password", state: password, setState: setPassword },
    // { id: 5, val: "dropdownselector" },
    // { id: 6, val: "departmentSelector" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LogoContainer st={styles.logoStyle} />
      <View behavior="padding" style={styles.formStyle}>
        <FlatList
          style={{ flex: 1 }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            {
              if (
                item.val != "dropdownselector" &&
                item.val != "departmentSelector"
              ) {
                return (
                  <TextInput
                    autoCorrect={false}
                    placeholder={item.val.toUpperCase()}
                    placeholderTextColor={colors.color}
                    style={styles.inputStyle}
                    value={item.state.inputText}
                    onChangeText={(input) => {
                      item.setState(input);
                      console.log(input);
                      // console.log(item.state.nativeEvent.text);
                    }}
                    onFocus={() => {
                      setIsKeyboard(true);
                    }}
                  />
                );
              } else if (item.val == "dropdownselector")
                return (
                  <DropDownSelector
                    selectedRole={selectedRole}
                    setSelectedRole={setSelectedRole}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                    Data={roles}
                  />
                );
              else {
                if (!isClicked) {
                  for (i in roles) {
                    // console.log(item);
                    if (
                      roles[i].name === selectedRole &&
                      roles[i].dep === true
                    ) {
                      return (
                        <DropDownSelector
                          selectedRole={selectedDept}
                          setSelectedRole={setSelectedDept}
                          isClicked={isDeptClicked}
                          setIsClicked={setIsDeptClicked}
                          Data={dept}
                        />
                      );
                    }
                  }
                }
                return null;
              }
            }
          }}
        ></FlatList>
      </View>
      {/* <DropDownPicker
        defaultNull
        placeholder="Select a role"
        containerStyle={{ height: 3, zIndex: 99 }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        // onChangeItem={(item) => setSelectedValue(item.value)}
        style={[
          {
            // paddingVertical: 10,
            // alignSelf: "center",
            // width: "80%",
            // borderColor: "black",
            // borderRadius: 10,
            // borderWidth: 1,
            position: "relative",
            top: -(height * 0.099333),
            width: "80%",
            alignSelf: "center",
          },
          // styles.inputStyle,
        ]}
        itemStyle={{ alignItems: "flex-start" }}
        labelStyle={{
          fontSize: 14,
          color: colors.color,
          fontWeight: "bold",
        }}
      /> */}
      {!isKeyboard ? (
        <View style={styles.signUpButtonContainer}>
          <TouchableOpacity
            style={[buttons.buttonStyle]}
            onPress={handleSignUp}
          >
            <Text style={buttons.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <Text
              style={{
                alignSelf: "center",
                justifyContent: "center",
                marginTop: responsiveHeight(2),
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity
              style={{
                // flex: 1,
                paddingTop: responsiveHeight(2),
                paddingLeft: responsiveWidth(1),
              }}
              onPress={() => setHaveAccount(true)}
            >
              <Text
                style={{
                  // marginTop: responsiveHeight(1),
                  textDecorationLine: "underline",
                  color: colors.color,
                  // paddingTop: 100,
                }}
              >
                Login Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // backgroundColor: colors.backgroundColor,
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  formStyle: {
    // backgroundColor: "orange",
    // flex: 1,
    flexGrow: 1.2,
    // alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(2),
    // paddingTop: 90,
    // paddingBottom: responsiveHeight(1),
  },
  logoStyle: {
    // flexGrow: 0.4,
    marginTop: responsiveHeight(2),
  },
  listStyle: {
    // flex: 1,
    width: "90%",
    // alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    placeholderTextColor: colors.color,
    fontWeight: "bold",
    width: "90%",
    paddingLeft: responsiveWidth(3),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    paddingTop: responsiveHeight(0.7),
    paddingBottom: responsiveHeight(0.7),
    borderColor: "black",
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.3),
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  signUpButtonContainer: {
    // backgroundColor: "yellow",
    flexGrow: 0.24,
    width: "100%",
    alignItems: "center",
    // marginBottom: responsiveHeight(1),
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateAccount;
