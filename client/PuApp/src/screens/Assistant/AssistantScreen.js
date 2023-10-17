import { createContext, React } from "react";
import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Parent from "./Parent";
import DrawerComponent from "../../components/Role.js/Drawer/DrawerComponent";
import { Feather } from "@expo/vector-icons";
import Drawer from "../../components/Role.js/Drawer/Drawer";
import Assistant from "./Assistant";
import AddEmployee from "../User/AddEmployee";
import { useRoute } from "@react-navigation/native";

const Draw = createDrawerNavigator();
export const roleContext = createContext();

const AssistantScreen = () => {
  const route = useRoute();
  const { role, name, dept, _id } = route.params;

  return (
    <roleContext.Provider
      value={{
        name,
        dept,
        role,
        _id,
        screen: "ComplaintAssign",
        text: "Assign",
      }}
    >
      <Draw.Navigator
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: tabStyle.btn,
          drawerActiveBackgroundColor: "#ecd282",
          drawerActiveTintColor: "fff",
        }}
        drawerContent={(props) => <DrawerComponent {...props} />}
      >
        <Draw.Screen
          name="Assistant"
          options={{
            headerShown: false,
            drawerIcon: () => (
              <Feather
                style={tabStyle.icon}
                name={"edit"}
                size={responsiveWidth(6)}
              />
            ),
          }}
          component={Assistant}
          initialParams={{ screen: "user" }}
        />
        <Draw.Screen
          name="AddEmployee"
          options={{
            headerShown: false,
            drawerIcon: () => (
              <Feather
                style={tabStyle.icon}
                name={"user-plus"}
                size={responsiveWidth(6)}
              />
            ),
          }}
          component={AddEmployee}
        />
      </Draw.Navigator>
    </roleContext.Provider>
  );
};
const tabStyle = StyleSheet.create({
  icon: {
    paddingTop: responsiveHeight(0.5),
    // flexGrow: 1,
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flexDirection: "row",
    borderBottomWidth: responsiveWidth(0.3),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(2),
    width: "80%",
    fontSize: responsiveFontSize(2.5),
    // paddingBottom: responsiveHeight(1),
    fontWeight: "500",
    color: "#fa9387",
  },
});
export default AssistantScreen;
