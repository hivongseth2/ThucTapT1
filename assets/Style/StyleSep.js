import { StyleSheet } from "react-native";

const StyleStep = StyleSheet.create({
  containerStep: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: 80,
    height: 100,
  },

  tick: {
    width: 8,
    height: 8,
    // filter: grayscale(100),
  },

  hContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  nameContainer: {
    width: "100%",
    position: "absolute",
    top: 60,
    alignSelf: "center",
    textAlign: "center",
    position: "absolute",

    justifyContent: "flex-start",
  },
  name: {
    width: 70,
    alignSelf: "center",
    textAlign: "center",

    position: "absolute",
  },
  circle: {
    borderRadius: 100,
    width: 20,
    marginLeft: "70%",
    height: 20,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  stepNumber: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default StyleStep;
