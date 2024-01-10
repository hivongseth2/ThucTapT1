import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Style from "../assets/Style/Style";
import StyleTT from "../assets/Style/StyleTT";
import SliderCustom from "./SliderCustom";
export default function ThamGia() {
  return (
    <View style={{ width: "100%" }}>
      <Text style={[Style.h3, { color: "#333", paddingBottom: 10 }]}>
        SỐ TIỀN THAM GIA BẢO HIỂM
      </Text>
      <TextInput
        placeholder="   123.456.000 đ"
        style={StyleTT.input}
        placeholderTextColor={"#333"}
      ></TextInput>
      {/* <SliderComponent /> */}
      <SliderCustom />
    </View>
  );
}

const styles = StyleSheet.create({});
