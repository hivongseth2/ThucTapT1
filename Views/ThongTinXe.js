import {
  StyleSheet,
  Text,
  TextInput,
  Animated,
  TouchableOpacity,
  View,
  Easing,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Style from "../assets/Style/Style";
import StyleTT from "../assets/Style/StyleTT";
import SliderComponent from "../Component/SliderComponent";
import BHXe from "../Component/CheckBox";
import BaoHiemXe from "../Component/BaoHiemXe";
import BaoHiemXeBS from "../Component/BaoHiemXeBS";
import GiaTri from "../Component/GiaTri";
import ThamGia from "../Component/ThamGia";
import SliderCustom from "../Component/SliderCustom";
export default function ThongTinXe() {
  const [pressIn, setPressIn] = useState(false);
  const [pressOut, setPressOut] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);

  return (
    <View
      style={[
        Style.container,
        {
          justifyContent: "flex-start",
          height: 400,
          backgroundColor: "#FFF",
        },
      ]}
    >
      <View
        style={[
          Style.VContainer,
          {
            backgroundColor: "#fff",
            width: 380,
            marginBottom: 10,
            marginLeft: 20,
          },
        ]}
      >
        <Text
          style={[
            Style.h2,
            { alignSelf: "flex-start", marginLeft: 0, marginTop: 20 },
          ]}
        >
          Quyền Lợi Bảo Hiểm
        </Text>

        <GiaTri />
        <ThamGia />
      </View>

      <BaoHiemXe />
      <BaoHiemXeBS />
    </View>
  );
}

const styles = StyleSheet.create({});
