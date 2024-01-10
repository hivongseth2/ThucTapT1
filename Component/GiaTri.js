import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Style from "../assets/Style/Style";
import StyleTT from "../assets/Style/StyleTT";

export default function GiaTri() {
  return (
    <View style={{ width: "100%", marginBottom: 20 }}>
      <Text style={[Style.h3, { color: "#333", paddingBottom: 10 }]}>
        GIÁ TRỊ THỊ TRƯỜNG
      </Text>
      <TextInput
        placeholder="    Từ - đến(VND)"
        placeholderTextColor={"#ccc"}
        style={StyleTT.input}
      ></TextInput>
      <Text
        style={[
          Style.h4,
          { color: "#8F8F8F", fontWeight: "bold", paddingVertical: 10 },
        ]}
      >
        Giá có thể chênh lệch khoảng n% giữa các nhà bảo hiểm
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
