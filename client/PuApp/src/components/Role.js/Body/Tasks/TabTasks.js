import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import colors from "../../../../../assets/css";

const TabTasks = ({
  item,
  index,
  selectedRole,
  complaintsList,
  setComplaintsList,
}) => {
  const [st, setSt] = useState({});
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setSt({});
      };
    }, [])
  );

  return (
    <View style={[bodyStyles.itemContainer, st]}>
      <TouchableOpacity
        style={bodyStyles.itemSelectButton}
        disabled={selectedRole[0] == "Pending" ? false : true}
        onPress={() => {
          if (complaintsList.indexOf(item.id) == -1) {
            setComplaintsList([...complaintsList, item.id]);

            // setSt({ backgroundColor: "rgba(242, 121, 107, 0.6)" });
            setSt({
              borderColor: colors.color,
              borderWidth: responsiveWidth(0.5),
              elevation: 0,
            });
          } else {
            setComplaintsList(
              complaintsList.filter((id) => {
                return id != item.id;
              })
            );
            setSt({});
          }
        }}
      >
        <Text>{item.department}</Text>
        <Text>{item.createdAt.toString()}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={bodyStyles.itemOpenButton}
        onPress={() => {
          navigation.navigate("ComplaintPage", item);
        }}
      >
        <Feather name="chevron-right" size={responsiveWidth(5)} />
      </TouchableOpacity>
    </View>
  );
};

const bodyStyles = StyleSheet.create({
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
  itemSelectButton: {
    zIndex: -1,
    flexGrow: 4,
    paddingLeft: responsiveWidth(8),
  },
  itemOpenButton: {
    flexGrow: 1,
    borderLeftWidth: responsiveWidth(0.2),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabTasks;
