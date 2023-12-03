import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../../../assets/css";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
// import data from "./employeeData";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";

const uri = "http://192.168.29.131:4000/task/assignworker";
const assign = async (item, complaintsList) => {
  try {
    console.log(item);
    const result = await fetch(uri, {
      method: "POST",
      body: JSON.stringify({
        workerIdArray: [item._id],
        taskIdarray: complaintsList,
      }),
      // body: {id: _id, dept},
      headers: { "Content-Type": "application/json" },
    });

    const res = await result.json();
    if (res.success) {
      alert("Successfully Assigned");
    }
  } catch (err) {
    alert(err);
  }
};

const ComplaintAssign = ({ navigation }) => {
  // const complaintsList = ["1", "2"];
  const route = useRoute();
  const { complaintsList, id, role, dept, setRefresh } = route.params;
  const [back, setBack] = useState(false);
  const [data, setData] = useState([]);
  const complaintText = () => {
    const temp = complaintsList.slice(0, 3);
    str = temp.join(", ");
    if (complaintsList.length > 3) str += "...";
    return str;
  };

  const uri = "http://192.168.29.131:4000/employee/getallemployeebydepartment";
  useEffect(() => {
    const handle = async () => {
      try {
        console.log(role, dept);
        const result = await fetch(uri, {
          method: "POST",
          body: JSON.stringify({ role, dept }),
          // body: {id: _id, dept},
          headers: { "Content-Type": "application/json" },
        });
        const res = await result.json();
        if (res.success) {
          const val = [];
          res.data.forEach((item) => {
            val.push({
              ...item,
              tasks: {
                completed: 12,
                pending: 5,
                ongoing: 2,
              },
            });
          });
          setData(val);
        }
      } catch (err) {
        alert(err);
      }
    };
    handle();
  }, []);
  // if (back) {
  //   navigation.navigate("Home");
  // }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            // return setBack(true);
          }}
        >
          <Feather
            style={{ paddingLeft: responsiveWidth(2) }}
            name="arrow-left"
            color="white"
            size={responsiveWidth(8)}
          ></Feather>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.headTextStyle}>Complaint Number</Text>
          <Text style={styles.headTextStyle}>{complaintText()}</Text>
        </View>
      </View>
      {/* <Tab item={data[1]} /> */}
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          console.log(item);
          return (
            <Tab
              item={item}
              complaintsList={complaintsList}
              setRefresh={setRefresh}
            />
          );
        }}
        style={styles.listStyle}
      ></FlatList>
    </SafeAreaView>
  );
};

const Tab = (props) => {
  const { item, complaintsList, setRefresh } = props;

  return (
    <View style={tabStyle.container}>
      <View style={tabStyle.profileHeader}>
        <View style={tabStyle.imageContainer}>
          <Image source={require("../../../assets/author-16.jpg")}></Image>
        </View>
        <View style={tabStyle.nameContainer}>
          <Text style={{ paddingLeft: responsiveWidth(4) }}>
            {" "}
            {`${item.name}`}{" "}
          </Text>
        </View>
      </View>

      <View style={tabStyle.bottomContainer}>
        <View style={tabStyle.taskStyle}>
          {/* {Object.keys(item.tasks)
            .forEach((key, index) => {
              console.log(key);
              return (
                <View>
                  <Text>{`${key}`}</Text>
                  <Text style={{ color: colors.color }}>
                    {`${item.tasks[key]}`}
                  </Text>
                </View>
              );
            })
            .map((item) => item)} */}
          <View
            style={{
              flexDirection: "row",
              width: responsiveWidth(30),
              justifyContent: "space-between",
            }}
          >
            <Text>Completed</Text>
            <Text style={{ color: colors.color }}>{item.tasks.completed}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: responsiveWidth(30),
              justifyContent: "space-between",
            }}
          >
            <Text style={{}}>Pending</Text>
            <Text style={{ color: colors.color }}>{item.tasks.pending}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: responsiveWidth(30),
              justifyContent: "space-between",
            }}
          >
            <Text>Ongoing</Text>
            <Text style={{ color: colors.color }}>{item.tasks.ongoing}</Text>
          </View>
        </View>
        <View style={tabStyle.buttonContainer}>
          <TouchableOpacity
            style={tabStyle.buttonStyle}
            onPress={() => {
              assign(item, complaintsList);
              setRefresh((val) => !val);
            }}
          >
            <Text name style={{ color: colors.color, fontWeight: 800 }}>
              Assign
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // marginTop: 100,
  },
  header: {
    height: "15%",
    paddingTop: responsiveHeight(3),
    backgroundColor: colors.color,
    flexDirection: "row",
  },
  headTextStyle: {
    color: "white",
    fontWeight: "bold",
    paddingLeft: responsiveWidth(16),
    fontSize: responsiveFontSize(2.5),
  },
  textContainer: {
    // marginTop: responsiveHeight(2),
    alignItems: "flex-start",
  },
  backButton: {
    marginLeft: responsiveWidth(2),
  },
  listStyle: {
    marginTop: responsiveHeight(2),
  },
});

const tabStyle = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",
    // height: "30%",
    width: "90%",
    justifyContent: "center",
    elevation: 2,
    // borderWidth: 20,
    margin: responsiveWidth(1),
    borderRadius: responsiveWidth(2),
    alignSelf: "center",
  },
  buttonStyle: {
    backgroundColor: "rgba(242, 121, 107, 0.3)",
    borderRadius: responsiveWidth(5),

    paddingLeft: responsiveWidth(2),
    paddingRight: responsiveWidth(2),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    // flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // paddingLeft: responsiveWidth(8),
    paddingRight: responsiveWidth(8),
    // marginBottom: responsiveHeight(4),
  },
  profileHeader: {
    // flex: 1,
    flexDirection: "row",
    // width: "60%",
    // height: responsiveHeight(12),
    alignItems: "center",
    // justifyContent: "space-between",
    paddingTop: "5%",
    paddingLeft: responsiveWidth(6),
    // paddingRight: responsiveWidth(1),
  },
  imageContainer: {
    justifyContent: "center",
  },
  nameContainer: {
    justifyContent: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: responsiveHeight(3),
  },
  taskStyle: {
    // backgroundColor: "pink",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: responsiveHeight(2),
    paddingLeft: responsiveWidth(6),
    // backgroundColor: "blue",
    // height: 40,
  },
});

export default ComplaintAssign;
