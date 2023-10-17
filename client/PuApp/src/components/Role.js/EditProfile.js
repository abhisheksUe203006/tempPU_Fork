import { Text, View } from "react-native";
import React, { Component } from "react";
import { StyleSheet } from "react-native";

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileImage}></View>
        <View style={styles.nameDept}></View>
      </View>
      <View style={styles.mobile}></View>
      <View style={styles.address}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: "row",
  },
  nameDept: {
    flexDirection: "column",
  },
  textStyle: {},
});

export default EditProfile;
