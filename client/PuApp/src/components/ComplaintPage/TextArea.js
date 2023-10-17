import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  PixelRatio,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Feather } from "@expo/vector-icons";

const TextArea = ({ st, remarks, setRemarks, setShowModal }) => {
  return (
    <Modal transparent visible={true}>
      <View style={[styles.modal, st]}>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Add Remark"}
          multiline
          numberOfLines={4}
          value={remarks}
          onChangeText={(val) => setRemarks(val)}
        ></TextInput>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            // Keyboard.dismiss();
            setShowModal(false);
          }}
        >
          <Feather name={"check"} color={"#fff"} size={responsiveWidth(10)} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
    marginTop: responsiveHeight(10),
    backgroundColor: "rgba(0,0,0, 0.5)",
  },
  inputStyle: {
    height: "25%",
    width: "80%",
    borderColor: "#625b5b",
    borderWidth: responsiveWidth(1),
    backgroundColor: "#fff",
    marginTop: responsiveHeight(5),
    padding: responsiveWidth(3),
    fontSize: 15 / PixelRatio.getFontScale(),
  },
  icon: {
    backgroundColor: "#0a560a",
    borderColor: "#0a560a",
    borderRadius: 100,
    borderWidth: responsiveWidth(4),
    marginTop: responsiveHeight(5),
    alignSelf: "center",
  },
});

export default TextArea;
