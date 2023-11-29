import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, Text } from "react-native";
import colors from "../../../assets/css";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import tasksData from "./tasksData";
import {
  StackActions,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import Header from "../../components/Role.js/Header/Header";
import Body from "../../components/Role.js/Body/Body";
import { useContext } from "react";
import { roleContext } from "./AssistantScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Employees from "../../components/Role.js/Body/Employees/Employees";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const Assistant = ({ user }) => {
  const [complaintsList, setComplaintsList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [tasks, setTasks] = useState({
    completed: [],
    pending: [],
    ongoing: [],
  });
  const [btn, setBtn] = useState(true);
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setComplaintsList([]);
      };
    }, [])
  );

  const uri = "http://192.168.29.131:4000/task/getalltaskbydepartment";

  const { dept, _id, name, role } = useContext(roleContext);

  useEffect(() => {
    const handle = async () => {
      try {
        const response = await fetch(uri, {
          method: "POST",
          body: JSON.stringify({ id: _id, dept }),
          // body: {id: _id, dept},
          headers: { "Content-Type": "application/json" },
        });
        // console.log(res);
        const res = await response.json();
        if (res.ok) {
          let completed = [],
            pending = [],
            ongoing = [];
          res.data.forEach((item) => {
            // const temp = { : item._id, description: item.details };
            switch (item.status) {
              case "Completed":
                completed.push(item);
                break;
              case "Pending":
                pending.push(item);
                break;
              case "Ongoing":
                ongoing.push(item);
                break;
            }
          });
          // console.log(completed, pending, ongoing)
          setTasks({ completed, pending, ongoing });
          // console.log(tasks)
        } else {
          throw Error("failed");
        }
      } catch (err) {
        alert(err);
      }
    };
    handle();
    console.log("out");
  }, [refresh]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {/* <Stack.Navigator>
        <Stack.Screen
          name="Body"
          component={Body}
          initialParams={{
            complaintsList,
            setComplaintsList,
            tasks,
            setRefresh
            
            ,
            context: roleContext,
          }}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Employees"
          component={Employees}
          options={{ headerShown: false }}
        />
      </Stack.Navigator> */}
      <View style={[styles.btnContainer]}>
        <View style={[styles.btn, styles.btn1]}>
          <TouchableOpacity onPress={() => setBtn(true)}>
            <Text style={styles.btnText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.btn, styles.btn2]}>
          <TouchableOpacity onPress={() => setBtn(false)}>
            <Text style={styles.btnText}>Employees</Text>
          </TouchableOpacity>
        </View>
      </View>
      {btn && (
        <Body
          complaintsList={complaintsList}
          setComplaintsList={setComplaintsList}
          tasks={tasks}
          setRefresh={setRefresh}
          context={roleContext}
        />
      )}
      {!btn && <Employees />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  bodyContainer: {
    flex: 1,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  btn: {
    // flex: 1,
    backgroundColor: "#eca92f",
    borderColor: "#ff6200",
    borderBottomWidth: responsiveWidth(1),
    width: "35%",
    zIndex: -1,
  },
  btn1: {
    borderTopRightRadius: responsiveWidth(1),
    borderBottomRightRadius: responsiveWidth(1),
    // marginRight: responsiveWidth(2),
  },
  btn2: {
    borderTopLeftRadius: responsiveWidth(1),
    borderBottomLeftRadius: responsiveWidth(2),
  },
  btnText: {
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default Assistant;
