import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const SeeImageButton = ({ st }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.btn, st]}
      onPress={() => {
        navigation.navigate("Gallery");
      }}
    >
      <Text style={styles.btnText}>See Images</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#e99d78",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    borderRadius: responsiveWidth(4),
    // flex: 1,
  },
  btnText: {
    color: "#fff",
    fontWeight: "500",
    alignSelf: "center",
  },
});

export default SeeImageButton;
