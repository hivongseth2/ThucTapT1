import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Style from "../assets/Style/Style";
export default function Header() {
  return (
    <View style={[Style.header, { justifyContent: "space-around" }]}>
      <Image
        style={Style.BackIcon}
        source={require("../assets/img/back.png")}
      />
      <View style={[Style.HContainer]}>
        <Image
          style={Style.iconHeader}
          source={require("../assets/img/sedan.png")}
        />
        <View
          style={[
            Style.VContainer,
            { alignItems: "flex-start", marginLeft: 10 },
          ]}
        >
          <Text style={Style.h3}>Bảo Hiểm Vật Chất Xe</Text>
          <Text style={Style.h4}>Hoa hồng lên đến 48%</Text>
        </View>
      </View>
      <Image
        style={Style.BackIcon}
        source={require("../assets/img/bell.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
