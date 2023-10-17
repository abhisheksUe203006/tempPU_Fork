import { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { roleContext } from "../../../screens/Assistant/AssistantScreen";
import { userContext } from "../../../screens/User/UserScreen";
import colors from "../../../../assets/css";
import ProfileImage from "./ProfileImage";
const Header = ({screen}) => {
  
  let dept;
  switch(screen){
    case 'assistant':
      dept = useContext(roleContext).dept;
      break;
    case 'user':
      dept = useContext(userContext).dept
      break;
  }
  // const { dept } = useContext(context);

  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headingContainer}>
        <View style={styles.drawerButton}>
          <TouchableOpacity
            style={{ paddingLeft: responsiveWidth(2) }}
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Feather
              name="align-justify"
              color={"white"}
              size={responsiveWidth(6)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>PANJAB UNIVERSITY</Text>
        </View>
      </View>
      <View>
        <Text style={styles.deptName}>{dept}</Text>
      </View>
      <ProfileImage />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.color,
    // height: "17%",
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  drawerButton: {
    flexGrow: 1,
    alignItems: "flex-start",
    paddingTop: responsiveHeight(1),
    // justifyContent: "flex-start",
  },
  heading: {
    alignItems: "center",
    flexGrow: 1,
  },
  headingText: {
    alignSelf: "flex-start",
    fontSize: responsiveFontSize(3),
    fontWeight: "600",
    paddingTop: responsiveHeight(0.6),
    // paddingRight: responsiveWidth(8),
    color: "white",
  },
  deptName: {
    alignSelf: "center",
    color: "white",
    fontSize: responsiveFontSize(2.5),
    fontWeight: "500",
    paddingTop: responsiveHeight(1),
  },
});

export default Header;
