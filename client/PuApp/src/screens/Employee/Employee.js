import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import tasksData from "./tasksData";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import Header from "../../components/Role.js/Header/Header";
import Body from "../../components/Role.js/Body/Body";
import { employeeContext } from "./EmployeeScreen";

const Employee = () => {
  const [complaintsList, setComplaintsList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [tasks, setTasks] = useState({
    completed: [],
    pending: [],
    ongoing: [],
  });

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setComplaintsList([]);
      };
    }, [])
  );
  const uri = "http://192.168.29.131:4000/task/getalltaskbyworker";

  const { dept, _id, name, role } = useContext(employeeContext);

  useEffect(() => {
    const handle = async () => {
      console.log("here");
      try {
        const response = await fetch(uri, {
          method: "POST",
          body: JSON.stringify({ id: _id, dept }),
          // body: {id: _id, dept},
          headers: { "Content-Type": "application/json" },
        });
        // console.log(res);
        const res = await response.json();
        if (res.success) {
          console.log(res.data);
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

  console.log("hello");
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body
        complaintsList={complaintsList}
        setComplaintsList={setComplaintsList}
        tasks={tasks}
        context={employeeContext}
        setRefresh={setRefresh}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Employee;
