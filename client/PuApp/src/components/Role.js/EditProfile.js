import { Text, View } from "react-native";
import { React } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Feather } from "@expo/vector-icons";
import colors from "../../../assets/css";

const EditProfile = () => {
  const data = {
    name: "Abhinav Mishra",
    mobile: 9889174185,
    photo: "",
    address: "2920, Sector 37C, Chandigarh",
    dept: "Water",
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileImage}>
          <Image
            style={styles.image}
            source={require("../../../assets/SauravTiwari.png")}
          />
          <TouchableOpacity style={styles.btn}>
            <Feather name={"edit"} />
          </TouchableOpacity>
        </View>
        <View style={styles.nameDept}>
          <View style={styles.name}>
            <Text style={styles.textStyle}> {data.name} </Text>
            <TouchableOpacity style={styles.btn}>
              <Feather name={"edit"} />
            </TouchableOpacity>
          </View>
          <View style={styles.dept}>
            <Text style={styles.textStyle}> {data.dept} </Text>
          </View>
        </View>
      </View>
      <View style={styles.mobile}>
        <Text style={styles.textStyle}> {data.mobile} </Text>

        <TouchableOpacity style={styles.btn}>
          <Feather name={"edit"} />
        </TouchableOpacity>
      </View>
      <View style={styles.address}>
        <Text style={styles.textStyle}> {data.address} </Text>
        <TouchableOpacity style={styles.btn}></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(4),
    backgroundColor: "yellow",
    flex: 1,
  },
  profile: {
    flexDirection: "row",
  },
  profileImage: {
    flexGrow: 1,
  },
  nameDept: {
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    flexGrow: 2,
  },
  textStyle: {
    color: colors.color,
    fontWeight: 600,
    fontSize: responsiveWidth(5),
  },
  image: {
    borderColor: "white",
    borderRadius: responsiveWidth(15),
    height: responsiveHeight(12),
    width: responsiveWidth(25),
    alignSelf: "center",
  },
  btn: {
    position: "relative",
    bottom: responsiveHeight(0.5),
    left: responsiveWidth(2),
  },
});

export default EditProfile;
