import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import ImagePicker from "./ImagePicker";
import InfoArea from "./InfoArea";
import TextArea from "./TextArea";
import SeeImageButton from "./SeeImageButton";
import { useContext } from "react";
import { ComplaintContext } from "./ComplaintPage";

const Body = () => {
  const [status, setStatus] = useState("pending");
  const [remarks, setRemarks] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const { data } = useContext(ComplaintContext);

  return (
    <View style={styles.container}>
      <InfoArea st={styles.area} data={{ ...data, status }} />
      <SeeImageButton st={styles.btn} />
      {status !== "completed" ? (
        <>
          <ImagePicker st={styles.imagepicker} />

          <TouchableOpacity
            style={styles.textArea}
            onPress={() => {
              setShowModal(true);
            }}
          >
            <Text style={{ color: "#5c5656", textAlign: "left" }}>
              {remarks ?? "Add Remarks"}
            </Text>
          </TouchableOpacity>
          {showModal ? (
            <TextArea
              st={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
              }}
              remarks={remarks}
              setRemarks={setRemarks}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          ) : null}

          <TouchableOpacity style={styles.btnBottom}>
            <Text style={styles.btnText}>Mark As Done</Text>
          </TouchableOpacity>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  area: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    width: "90%",
    alignSelf: "center",
    paddingLeft: responsiveWidth(2),
  },
  btn: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    width: "80%",
    alignSelf: "center",
  },
  imagepicker: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(8),
    width: "80%",
    alignSelf: "center",
  },
  textArea: {
    height: "15%",
    width: "80%",
    alignSelf: "center",
    borderColor: "#746b6b",
    borderWidth: responsiveWidth(0.8),
    textAlign: "center",
  },
  btnBottom: {
    backgroundColor: "#e99d78",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    borderRadius: responsiveWidth(4),
    alignSelf: "center",

    marginTop: responsiveHeight(5),
    width: "90%",
  },
  btnText: {
    color: "#fff",
    fontWeight: "500",
    alignSelf: "center",
  },
});

export default Body;
