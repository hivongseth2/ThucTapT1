import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#0158d6",
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",

    // justifyContent: "space-around",

    width: "100%",
    height: 100,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  BackIcon: {
    height: 20,
    width: 20,
    color: "#fff",
  },
  VContainer: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  HContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  iconHeader: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "#fff",
    // padding: 55,
  },
  h3: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
  },
  h4: {
    fontSize: 10,
    fontWeight: "100",
    color: "#FFF",
  },
  h2: {
    fontSize: 18,
    paddingBottom: 20,
    alignSelf: "flex-start",
    marginLeft: 90,
    fontWeight: "bold",
    color: "#0258D6",
  },
});

export default Style;
