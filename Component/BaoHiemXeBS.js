import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CheckBox from "./CheckBox";
import Style from "../assets/Style/Style";

export default function BaoHiemXeBS() {
  return (
    <View
      style={[
        Style.HContainer,
        {
          justifyContent: "space-between",
          width: 380,
          marginLeft: 20,
          paddingBottom: 10,
          paddingRight: 20,
        },
      ]}
    >
      <View style={Style.HContainer}>
        <Text style={[Style.h3, { color: "#333" }]}>Bảo hiểm xe bổ sung </Text>

        <Image
          style={Style.BackIcon}
          source={require("../assets/img/information.png")}
        />
      </View>
      <CheckBox />
    </View>
  );
}

const styles = StyleSheet.create({});
