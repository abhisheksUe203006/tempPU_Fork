import { ScrollView, StyleSheet, View } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";

import DrawerTab from "./DrawerTab";

const Drawer = (props) => {
  return (
    <View></View>
    // <ScrollView style={styles.listStyle}>
    //   <DrawerTab
    //     title={"Edit Profile"}
    //     component=""
    //     iconName={"edit"}
    //     navigation={navigation}
    //   />
    //   <DrawerTab
    //     title={"Add Emoloyees"}
    //     iconName={"user-plus"}
    //     component={"AddEmployee"}
    //     navigation={navigation}
    //   />
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    paddingTop: responsiveHeight(10),
    backgroundColor: "#fae8d7",
  },
});

export default Drawer;
