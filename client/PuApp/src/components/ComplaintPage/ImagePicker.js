import { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Feather } from "@expo/vector-icons";
import * as Picker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { ComplaintContext } from "./ComplaintPage";

const handlePicker = async (setImage) => {
  try {
    let permission = await Picker.getMediaLibraryPermissionsAsync();
    console.log(permission);
    if (!permission.granted) {
      permission = await Picker.requestMediaLibraryPermissionsAsync();
      console.log(permission);
    }
    let result = await Picker.launchImageLibraryAsync({
      mediaTypes: Picker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result);
    }
  } catch (err) {
    console.log(err);
  }
};

const ImagePicker = ({ st }) => {
  const { setImage } = useContext(ComplaintContext);
  return (
    <View style={[styles.container, st]}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => handlePicker(setImage)}
      >
        <Feather name={"camera"} size={responsiveWidth(10)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: responsiveWidth(0.3),
    // flex: 1,
  },
  icon: {
    backgroundColor: "#e99d78",
    borderColor: "#e99d78",
    borderRadius: 100,
    borderWidth: responsiveWidth(4),
    marginBottom: responsiveHeight(-5),

    alignSelf: "center",
  },
});

export default ImagePicker;
