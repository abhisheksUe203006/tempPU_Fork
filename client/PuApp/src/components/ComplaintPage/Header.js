import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const fontScale = PixelRatio.getFontScale();
const Header = ({ text, date, st }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, st]}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <Feather name={"arrow-left"} size={responsiveWidth(7)} color={"#fff"} />
      </TouchableOpacity>
      <View style={styles.heading}>
        <Text style={styles.headingText} numberOfLines={1}>
          {`${text}...`}
        </Text>
        <Text style={styles.headingText}>{date.toString().slice(0, 16)} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",

    marginTop: StatusBar.currentHeight || 0,
    paddingTop: responsiveHeight(2),
    backgroundColor: "#e99d78",
  },
  heading: {
    // alignItems: "flex-end",

    flexGrow: 2,
  },
  icon: {
    // width: "100%",
    flexGrow: 1,
    paddingTop: responsiveHeight(1),
    alignItems: "center",
  },
  headingText: {
    fontWeight: "500",
    fontSize: 20 / fontScale,
    color: "#fff",
  },
});

export default Header;
