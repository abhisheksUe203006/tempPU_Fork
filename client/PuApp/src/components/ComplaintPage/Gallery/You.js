import { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { ComplaintContext } from "../ComplaintPage";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
const You = () => {
  const { image } = useContext(ComplaintContext);
  console.log(image.assets);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          {image.assets.map((item) => {
            return (
              <TouchableOpacity style={styles.btn}>
                <Image source={{ uri: item.uri }} style={styles.img} />
                {/* <Text>{item.uri}</Text> */}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(2),
  },
  btn: {
    elevation: 1,
    // borderWidth: responsiveWidth(0.2),
    padding: Width * (2 / 100),
  },
  img: {
    width: Width * (30 / 100),
    height: Height * (20 / 100),
  },
});

export default You;
