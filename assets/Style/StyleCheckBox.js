import { StyleSheet } from "react-native";

const StyleCheckBox = StyleSheet.create({
  containerCheckBox: {
    width: 60,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 100,
    shadowColor: "#ccc",
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 1.84,

    elevation: 10,
    justifyContent: "center",
  },
  circle: {
    borderRadius: 100,
    width: 23,
    height: 23,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,

    elevation: 10,
    backgroundColor: "#21BCFE",
    marginHorizontal: 5,
  },
});
export default StyleCheckBox;
