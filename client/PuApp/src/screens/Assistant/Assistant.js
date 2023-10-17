import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import colors from "../../../assets/css";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import tasksData from "./tasksData";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Header from "../../components/Role.js/Header/Header";
import Body from "../../components/Role.js/Body/Body";
import { useContext } from "react";
import { roleContext } from "./AssistantScreen";

const Assistant = ({ user }) => {
  const [complaintsList, setComplaintsList] = useState([]);
  const [tasks, setTasks] = useState(tasksData);
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setComplaintsList([]);
      };
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body
        complaintsList={complaintsList}
        setComplaintsList={setComplaintsList}
        tasks={tasks}
        data={data}
        context={roleContext}
      />
    </SafeAreaView>
  );
};

const data = [
  {
    name: "Completed",
    value: 10,
  },
  { name: "Pending", value: 10 },
  { name: "Ongoing", value: 10 },
];

// let st = {};

// const promisifySetComplaintList = (
//   complaintsList,
//   setComplaintsList,
//   setSt,
//   item
// ) => {
//   const succ = { msg: "success" };
//   return new Promise((resolve, reject) => {
//     if (complaintsList.indexOf(item.id) == -1) {
//       setComplaintsList([...complaintsList, item.id], () => resolve(succ));

//       setSt({ backgroundColor: "rgba(242, 121, 107, 0.6)" }, () =>
//         resolve(succ)
//       );
//     } else {
//       setComplaintsList(
//         complaintsList.filter((id) => {
//           return id != item.id;
//         }),
//         () => resolve(succ)
//       );
//       setSt({}, () => resolve(succ));
//     }
//     // resolve(succ);
//   });
// };

// async function tabButton(complaintsList, setComplaintsList, setSt, item) {
//   await promisifySetComplaintList(
//     complaintsList,
//     setComplaintsList,
//     setSt,
//     item
//   );
// }

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
  listStyle: {
    flex: 1,
    zIndex: -1,
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(1.5),
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(2),
  },
  itemContainer: {
    flexDirection: "row",
    borderRadius: responsiveWidth(2),
    borderWidth: responsiveWidth(0.5),
    borderColor: "rgba(0,0,0,0)",
    elevation: responsiveWidth(0.5),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    marginTop: responsiveHeight(0.4),
    marginBottom: responsiveHeight(0.4),
    // marginTop()
    zIndex: -1,
  },
  itemOpenButton: {
    flexGrow: 1,
    borderLeftWidth: responsiveWidth(0.2),
    alignItems: "center",
    justifyContent: "center",
  },
  itemSelectButton: {
    zIndex: -1,
    flexGrow: 4,
    paddingLeft: responsiveWidth(8),
  },
  assignButton: {
    backgroundColor: colors.color,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    borderRadius: responsiveWidth(3),
  },
  profileContainer: { flexDirection: "row" },
  nameContainer: {
    alignItems: "center",
    paddingLeft: responsiveWidth(2),
    justifyContent: "center",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Assistant;
