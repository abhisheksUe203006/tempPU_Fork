import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const ProfileImage = () => {
  return (
    <View style={[styles.profileImageContainer]}>
      <TouchableOpacity style={styles.profileImageButton}>
        <Image
          source={require("../../../../assets/SauravTiwari.png")}
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImageContainer: {
    paddingTop: responsiveHeight(1),
  },
  profileImage: {
    // borderWidth: responsiveWidth(0.5),
    borderColor: "white",
    borderRadius: responsiveWidth(15),
    height: responsiveHeight(12),
    width: responsiveWidth(25),
    alignSelf: "center",
    // marginTop: responsiveHeight(-3),
  },
  profileImageButton: {
    backgroundColor: "white",
    width: responsiveWidth(26),
    borderRadius: responsiveWidth(15),
    alignSelf: "center",
    marginBottom: responsiveHeight(-6),
  },
});

export default ProfileImage;
