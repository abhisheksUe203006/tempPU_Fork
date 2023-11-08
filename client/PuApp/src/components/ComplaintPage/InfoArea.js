import axios from "axios";
import { useEffect } from "react";
import { View, Text, StyleSheet, PixelRatio } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const fontScale = PixelRatio.getFontScale();

const InfoArea = ({ data, st }) => {
  return (
    <View style={[styles.container, st]}>
      <Text style={styles.infoText}>{`Name: ${data.name}`}</Text>
      <Text style={styles.infoText}>{`Phone No: ${data.mobile}`}</Text>
      <Text style={styles.infoText}>{`Address: ${data.address}`}</Text>
      <Text style={styles.infoText} numberOfLines={2}>
        {`Complaint Details: ${data.details}...`}{" "}
      </Text>
      <Text style={styles.infoText}>{`Status: ${data.status}`}</Text>
      {data.status === "completed" ? (
        <Text style={styles.infoText}>{`Remarks: ${data.remarks}`}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#746b6b",
    borderWidth: responsiveWidth(1),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    // flex: 1,
  },
  infoText: {
    fontWeight: "500",
    color: "#524a4a",
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    fontSize: 15 / fontScale,
  },
});

export default InfoArea;
