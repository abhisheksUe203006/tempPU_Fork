import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export const colors = {
  backgroundColor: "white",
  color: "#fa9387",
  //#F2796B
};

export const buttons = {
  buttonStyle: {
    width: "90%",
    borderRadius: responsiveWidth(5),
    borderColor: colors.color,
    borderWidth: responsiveWidth(0),
    borderStyle: "solid",
    paddingTop: responsiveHeight(1.3),
    paddingBottom: responsiveHeight(1.3),
    // marginTop: 20,
    // paddingBottom: 20,
    backgroundColor: colors.color,
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: responsiveFontSize(2),
    // fontSize: responsiveWidth(3),
    margin: "auto",
    backgroundColor: colors.color,
  },
};

export default colors;
