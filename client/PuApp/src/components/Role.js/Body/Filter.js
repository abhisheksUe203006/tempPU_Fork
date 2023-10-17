import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Feather } from "@expo/vector-icons";
import colors from "../../../../assets/css";
import DateTimePicker from "@react-native-community/datetimepicker";

const Filter = ({ setFilter }) => {
  const [show, setShow] = useState(false);
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [settingFrom, setSettingFrom] = useState(true);
  const [correct, setCorrect] = useState(true);

  const handleFilterButton = () => {
    if (
      to.getFullYear() < from.getFullYear() ||
      to.getMonth() < from.getMonth() ||
      to.getDate() < from.getDate()
    ) {
      setCorrect(false);
    } else {
      setCorrect(true);
    }

    if (correct) {
      setFilter(false);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    if (settingFrom) setFrom(currentDate);
    else setTo(currentDate);
    setShow(false);
  };

  const returnFullDate = (currentDate) => {
    let tempDate = new Date(currentDate);
    return (
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear()
    );
  };

  return (
    // <View
    //   style={{ backgroundColor: colors.color, height: responsiveHeight(100) }}
    // >
    <Modal visible={true} transparent>
      <View style={styles.modalStyle}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{ alignSelf: "flex-end" }}
            onPress={() => setFilter(false)}
          >
            <Feather name="x" size={responsiveWidth(10)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>This Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Past Month</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              marginTop: responsiveHeight(2),
              marginBottom: responsiveHeight(2),
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: responsiveWidth(1),
                paddingRight: responsiveWidth(3),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  // justifyContent: "space-between",
                }}
              >
                <Text style={styles.buttonText}>From: </Text>
                <Text style={[styles.buttonText, { color: colors.color }]}>
                  {returnFullDate(from)}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.calendarButtonStyle}
                onPress={() => {
                  setShow(true);
                  setSettingFrom(true);
                }}
              >
                <Feather
                  name="calendar"
                  size={responsiveWidth(8)}
                  color="black"
                  // style={{ alignSelf: "center" }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: responsiveWidth(3),
                paddingRight: responsiveWidth(1),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  // justifyContent: "space-between",
                }}
              >
                <Text style={styles.buttonText}>To: </Text>
                <Text style={[styles.buttonText, { color: colors.color }]}>
                  {returnFullDate(to)}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.calendarButtonStyle}
                onPress={() => {
                  setShow(true);
                  setSettingFrom(false);
                }}
              >
                <Feather
                  name="calendar"
                  size={responsiveWidth(8)}
                  color="black"
                  // style={{ alignSelf: "center" }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={settingFrom ? from : to}
              mode={"date"}
              display="default"
              onChange={handleDateChange}
            />
          )}

          {!correct && (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "red", fontWeight: "500" }}>
                From date must be before To date
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: colors.color }]}
            onPress={handleFilterButton}
          >
            <Text style={styles.buttonText}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: colors.color }]}
          >
            <Text style={styles.buttonText}>Remove Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    // </View>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    // flex: 1,
    borderRadius: responsiveWidth(5),
    // elevation: responsiveWidth(0.3),
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  buttonContainer: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: responsiveWidth(4),
    alignItems: "center",
    justifyContent: "center",
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
  },
  buttonStyle: {
    borderRadius: responsiveWidth(3),
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    // height: responsiveHeight(20),
    // backgroundColor: "blue",
    borderColor: colors.color,
    borderWidth: responsiveWidth(1),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
  },
  buttonText: {
    fontWeight: "500",
    fontSize: responsiveFontSize(2),
  },
  calendarButtonStyle: {
    alignSelf: "center",
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(1.5),
  },
});

export default Filter;
