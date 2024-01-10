import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckBox from "./CheckBox";
import Style from "../assets/Style/Style";

export default function BaoHiemXe() {
  return (
    <View
      style={[
        Style.HContainer,
        {
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 380,
          marginLeft: 20,
          paddingBottom: 10,

          paddingRight: 20,
        },
      ]}
    >
      <Text style={[Style.h3, { color: "#333" }]}>Bảo hiểm vật chất xe</Text>
      <CheckBox />
    </View>
  );
}

const styles = StyleSheet.create({});
