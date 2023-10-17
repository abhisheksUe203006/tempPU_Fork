import { View, FlatList, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import TabTasks from "./TabTasks";

const Tasks = ({ selectedRole, complaintsList, setComplaintsList, tasks }) => {
  // const { selectedRole, setIsAssigning } =
  //   route.params?.userParam ?? "defaultValue";
  // const { selectedRole, complaintsList, setComplaintsList } = route.params;
  console.log(tasks);
  return (
    <View style={bodyStyles.listStyle}>
      <FlatList
        style={{ marginBottom: responsiveHeight(1) }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={tasks[selectedRole[0].toLowerCase()]}
        renderItem={({ item, index }) => {
          // console.log(item);
          return (
            <TabTasks
              item={item}
              index={index}
              selectedRole={selectedRole}
              complaintsList={complaintsList}
              setComplaintsList={setComplaintsList}
            />
          );
        }}
      />
    </View>
  );
};

const bodyStyles = StyleSheet.create({
  listStyle: {
    flex: 1,
    zIndex: -1,
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(1.5),
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(2),
  },
});

export default Tasks;
