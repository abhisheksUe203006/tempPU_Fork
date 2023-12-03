import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const DropDownModal = ({ setIsClicked, setVal, Data }) => {
  return (
    <Modal visible={true} transparent>
      <TouchableOpacity
        style={[styles.dropDownArea]}
        onPress={() => {
          setIsClicked(false);
        }}
      >
        <View
          // nestedScrollEnabled={true}
          style={styles.buttonContainer}
        >
          {Data.map((item) => {
            return (
              <TouchableOpacity
                style={styles.rolesItem}
                onPress={() => {
                  setVal(item);
                  setIsClicked(false);
                }}
              >
                <Text style={styles.rolesTextStyle}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  dropDownArea: {
    // position: "absolute",
    // top: responsiveHeight(4),
    // flex: 1,
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: responsiveWidth(2),
    // marginTop: 1,
    elevation: 5,
    zIndex: 10,
  },
  buttonContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: responsiveHeight(8),
    borderRadius: responsiveWidth(4),
    width: "90%",
    height: "20%",
  },
  rolesItem: {
    width: "100%",
    // height: responsiveHeight(5),
    // flexGrow: 1,
    // borderBottomColor: "8e8e8e",
    // borderBottomWidth: responsiveWidth(0.15),
    // borderWidth: responsiveWidth(0.1),
    elevation: responsiveWidth(0.2),
    borderRadius: responsiveWidth(1),
    alignSelf: "flex-start",
    justifyContent: "center",
    paddingLeft: responsiveWidth(2),
    paddingTop: responsiveWidth(1),
    paddingBottom: responsiveWidth(1),
    marginTop: responsiveHeight(0.1),
    marginBottom: responsiveHeight(0.1),
    // fontSize: responsiveFontSize(4),

    // zIndex: 2,
  },
  rolesTextStyle: {
    fontSize: responsiveFontSize(2),
    fontWeight: "400",
  },
});

export default DropDownModal;
