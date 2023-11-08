import { createContext, React } from "react";
import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerComponent from "../../components/Role.js/Drawer/DrawerComponent";
import Drawer from "../../components/Role.js/Drawer/Drawer";
import User from "./User";
import { useRoute } from "@react-navigation/native";
import AddEmployee from "./AddEmployee";
import { Feather } from "@expo/vector-icons";

const Draw = createDrawerNavigator();
export const userContext = createContext();

const UserScreen = () => {
  const route = useRoute();
  const { role, name, dept, _id } = route.params;
  console.log(dispVal);
  return (
    <userContext.Provider
      value={{
        name,
        role,
        _id,
        dept,
        screen: "RegisterComplaint",
        text: "Register Complaint",
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
          name="User"
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
          component={User}
          initialParams={{ screen: "user" }}
        />

        <Draw.Screen
          name="Edit Profile"
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
    </userContext.Provider>
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

export default UserScreen;
