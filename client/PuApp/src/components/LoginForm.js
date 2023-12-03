import { React, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import colors, { buttons } from "../../assets/css";
import LogoContainer from "./LogoContainer";
import { StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    // navigation.navigate("User");
    console.log(password, email);
    if (password.length == 0 || email.length == 0) {
      alert("One or more fields left blank");
      return;
    }
    try {
      let res = await fetch("http://192.168.29.131:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ email, password }),
      });

      res = await res.json();
      if (!res.success) throw new Error("User Does not exist");
      // await AsyncStorage.setItem("jwtToken", res.token);
      console.log(res.user);
      // console.log()
      navigation.dispatch({
        ...StackActions.replace(
          res.user.role.slice(0, 1).toUpperCase() +
            res.user.role.slice(1) +
            "Screen",
          res.user
        ),
        target: navigation.getState().key,
      });
    } catch (err) {
      alert(`Error: ${err}`);
    }
    //   // console.log("hii");
    //   const form = {
    //     email,
    //     password,
    //   };
    //   console.log(JSON.stringify(form));
    //   try {
    //     const uri = "http://192.168.118.67:3000/auth/login";
    //     const response = await fetch(uri, {
    //       method: "POST",
    //       body: JSON.stringify(form),
    //       headers: { "Content-Type": "application/json" },
    //     });

    //     const res = await response.json();
    //     if (res.success) {
    //       console.log("valid");
    //       navigation.navigate("CreateAccount");
    //     } else {
    //       console.log("invalid");
    //       setEmail("");
    //       setPassword("");
    //     }
    //   } catch (err) {
    //     console.log(err);
    //     setEmail("");
    //     setPassword("");
    //   }
  };
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: responsiveHeight(4) }}>
        <LogoContainer />
      </View>
      <ScrollView
        // style={styles.formContainer}
        contentContainerStyle={styles.formContainer}
      >
        <View style={styles.buttonContainer}>
          <TextInput
            autoCorrect={false}
            placeholder={"EMAIL"}
            style={styles.inputStyle}
            value={email.inputText}
            onChangeText={(event) => setEmail(event)}
          />
          <TextInput
            autoCorrect={false}
            secureTextEntry={true}
            placeholder={"PASSWORD"}
            style={styles.inputStyle}
            value={password.inputText}
            onChangeText={(event) => setPassword(event)}
          />
          <TouchableOpacity onPress={handleSubmit} style={buttons.buttonStyle}>
            <Text style={buttons.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <View style={styles.horinzontalBar}></View>
          <View style={styles.signUpStyle}>
            {/* <Text style={styles.signUpText}>Don't have an account?</Text> */}
            <TouchableOpacity>
              <Text style={styles.signUpText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.newAccountButtonStyle}
            onPress={() =>
              navigation.dispatch({
                ...StackActions.replace("CreateAccount", {
                  user: "jane",
                }),
                target: navigation.getState().key,
              })
            }
          >
            <Text style={styles.buttonText}>CREATE NEW ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  formContainer: {
    alignItems: "center",
    flexGrow: 1,
    marginTop: responsiveHeight(8),
  },
  buttonContainer: {
    // flex: 1,

    alignItems: "center",
    justifyContent: "center",
    // marginTop: 10,
    // marginBottom: responsiveHeight(7),
    width: "100%",
  },

  inputStyle: {
    color: "black",
    width: "90%",
    paddingLeft: responsiveWidth(3),
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(1.5),
    borderColor: colors.color,
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.5),
    borderStyle: "solid",
  },
  orTextStyle: {
    color: colors.color,
  },
  horinzontalBar: {
    backgroundColor: "grey",
    width: "70%",
    height: responsiveHeight(0.2),
    marginTop: responsiveHeight(5),
    alignSelf: "center",
  },

  signUpStyle: {
    // flex: 1,
    marginTop: responsiveHeight(5),
  },
  signUpText: {
    fontWeight: "bold",
    color: "black",
    fontSize: responsiveFontSize(2),
  },
  signUpLink: {
    // flex: 1,
    flexGrow: 0.4,
    flexDirection: "column",
    // paddingLeft: responsiveWidth(1),
    // paddingRight: responsiveWidth(1),
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    // alignSelf: "flex-end",
    // paddingTop: responsiveHeight(10),
    paddingBottom: responsiveHeight(0.5),
  },
  newAccountButtonStyle: {
    backgroundColor: "white",
    borderRadius: responsiveWidth(3),

    borderColor: colors.color,
    borderWidth: responsiveWidth(1),
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    marginTop: responsiveHeight(25),
  },
});

export default LoginForm;
