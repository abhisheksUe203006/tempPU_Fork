import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { ComplaintContext } from "../ComplaintPage";
import You from "./You";

const Gallery = () => {
  const [selected, setSelected] = useState(0);
  const { image } = useContext(ComplaintContext);
  console.log(image);
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[
            styles.btn,
            { tintColor: selected === 1 ? "black" : "white" },
          ]}
          onPress={() => setSelected(1)}
        >
          <Text style={styles.btnText}>You</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            { tintColor: selected === 0 ? "black" : "white" },
          ]}
          onPress={() => setSelected(0)}
        >
          <Text style={styles.btnText}>Complainant</Text>
        </TouchableOpacity>
      </View>
      {selected === 0 ? <You /> : <You />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveHeight(3),
  },
  btn: {
    flex: 1,
    backgroundColor: "#e99d78",
    borderRadius: responsiveWidth(2),
    borderWidth: responsiveWidth(0.5),
    height: Dimensions.get("window").height * (5 / 100),
    alignItems: "center",
    justifyContent: "center",
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(2),
  },
  btnText: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 15 / PixelRatio.getFontScale(),
    fontWeight: "500",
  },
});

export default Gallery;
