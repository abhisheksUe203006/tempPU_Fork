import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../../../assets/css";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { userContext } from "../../../screens/User/UserScreen";
import { useContext } from "react";

const AssignButton = ({ disable, args, context }) => {
  const navigation = useNavigation();
  const { screen, text } = useContext(context);
  return (
    <TouchableOpacity
      style={[bodyStyles.assignButton]}
      disabled={disable}
      onPress={() => {
        navigation.navigate(screen, args);
      }}
    >
      <Text
        style={{
          fontSize: responsiveFontSize(2),
          color: "white",
          fontWeight: "500",
          alignSelf: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const bodyStyles = StyleSheet.create({
  assignButton: {
    backgroundColor: colors.color,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    borderRadius: responsiveWidth(3),
  },
});

export default AssignButton;
