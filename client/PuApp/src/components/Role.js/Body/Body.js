import { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { Feather } from "@expo/vector-icons";

import Tasks from "./Tasks/Tasks";
import Employees from "./Employees/Employees";
import DropDownSelector from "../../../screens/Assistant/DropDownSelector";
import Filter from "./Filter";
import colors from "../../../../assets/css";
import { roleContext } from "../../../screens/Assistant/AssistantScreen";
import { userContext } from "../../../screens/User/UserScreen";
import AssignButton from "./AssignButton";

const Body = ({
  complaintsList,
  setComplaintsList,
  context,
  tasks,
  setRefresh,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedRole, setSelectedRole] = useState(["Pending", 10]);
  const [empSelected, setEmpSelected] = useState(false);

  // let name, role;
  // switch (screen) {
  //   case "assistant":
  //     {
  //       name = useContext(roleContext).name;
  //       role = useContext(roleContext).role;
  //     }
  //     break;
  //   case "user":
  //     {
  //       name = useContext(userContext).name;
  //       role = useContext(userContext).role;
  //     }
  //     break;
  // }
  const { _id, name, role, dept } = useContext(context);
  const showEmployee = ["assistant", "user"];
  const assign = showEmployee.includes(role.toLowerCase());
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    console.log(complaintsList);
  }, [complaintsList]);
  useEffect(() => {
    setEmpSelected(false);
  }, [isClicked]);
  // const id = "64dc907f480fa2b4e93931bc"

  const data = [
    {
      name: "Completed",
      value: tasks.completed.length,
    },
    { name: "Pending", value: tasks.pending.length },
    { name: "Ongoing", value: tasks.ongoing.length },
  ];

  return (
    <View style={bodyStyles.container}>
      <View style={bodyStyles.headingContainer}>
        <Text style={bodyStyles.headingText}> {name} </Text>
        <Text style={bodyStyles.roleText}> {role} </Text>
      </View>
      <View style={bodyStyles.summaryContainer}>
        <View style={bodyStyles.summaryBox}>
          <Text style={bodyStyles.summaryValue}>{tasks.completed.length}</Text>
          <Text style={bodyStyles.summaryHeading}>Completed</Text>
        </View>
        <View
          style={[
            bodyStyles.summaryBox,
            {
              borderLeftWidth: responsiveWidth(0.3),
              borderRightWidth: responsiveWidth(0.3),
            },
          ]}
        >
          <Text style={bodyStyles.summaryValue}>{tasks.pending.length}</Text>
          <Text style={bodyStyles.summaryHeading}>Pending</Text>
        </View>
        <View style={bodyStyles.summaryBox}>
          <Text style={bodyStyles.summaryValue}>{tasks.ongoing.length}</Text>
          <Text style={bodyStyles.summaryHeading}>Ongoing</Text>
        </View>
      </View>
      <View style={bodyStyles.tabContainer}>
        <View style={{ flexDirection: "row" }}>
          <DropDownSelector
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            Data={data}
            st={
              empSelected
                ? { backgroundColor: "white" }
                : { backgroundColor: colors.color }
            }
          />
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: responsiveWidth(1.5),
              paddingRight: responsiveWidth(1.5),
              marginLeft: responsiveWidth(-4),
              marginRight: responsiveWidth(4),
              borderRadius: responsiveWidth(2),
              borderWidth: responsiveWidth(0.3),
            }}
            onPress={() => {
              setFilter(true);
            }}
          >
            <Feather
              name="filter"
              color={colors.color}
              size={responsiveWidth(5)}
            />
          </TouchableOpacity>
          {filter && <Filter setFilter={setFilter} />}
        </View>
        {assign ? (
          <TouchableOpacity
            style={
              empSelected
                ? [
                    bodyStyles.tab,
                    bodyStyles.empButton,
                    { backgroundColor: colors.color },
                  ]
                : [
                    bodyStyles.tab,
                    bodyStyles.empButton,
                    { backgroundColor: "white" },
                  ]
            }
            onPress={() => {
              setIsClicked(false);
              setEmpSelected(!empSelected);
            }}
          >
            <Text style={{ fontWeight: "500" }}>Employees</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <Tasks
        selectedRole={selectedRole}
        complaintsList={complaintsList}
        setComplaintsList={setComplaintsList}
        tasks={tasks}
      />

      <AssignButton
        disable={false}
        args={{
          setRefresh,
          id: _id,
          complaintsList,
          setComplaintsList,
          role: "employee",
          dept,
        }}
        context={context}
      />
    </View>
  );
};

const bodyStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: responsiveHeight(6),
  },
  headingContainer: {
    alignItems: "center",
  },
  headingText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "500",
  },
  roleText: {
    fontSize: responsiveFontSize(2),
    fontWeight: "500",
    color: colors.color,
  },
  summaryContainer: {
    flexDirection: "row",
    paddingTop: responsiveHeight(2),
  },
  summaryBox: {
    flexGrow: 1,
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  summaryHeading: {
    fontSize: responsiveFontSize(2),
    fontWeight: "500",
  },
  summaryValue: {
    fontSize: responsiveFontSize(2),
    fontWeight: "500",
    color: colors.color,
  },
  tabContainer: {
    flexDirection: "row",
    paddingTop: responsiveHeight(2),
    marginRight: responsiveWidth(2),
    marginLeft: responsiveWidth(2),
  },
  tab: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    // width: "28%",
  },
  empButton: {
    // paddingTop: responsiveHeight(0.5),
    // paddingBottom: responsiveHeight(0.5),
    borderRadius: responsiveWidth(4),
    borderWidth: responsiveWidth(0.3),
    fontWeight: "500",
  },
});

export default Body;
