import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import QuyenLoi from "../Views/QuyenLoi";
import BaoGia from "../Views/BaoGia";
import ThongTin from "../Views/ThongTin";
import XacNhan from "../Views/XacNhan";
import ThongTinXe from "../Views/ThongTinXe";

export default function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Xe"
        component={ThongTinXe}
        options={{ headerShown: false, headerShadowVisible: false }}
      />
      <Stack.Screen
        name="QuyenLoi"
        component={QuyenLoi}
        options={{ headerShown: false, headerShadowVisible: false }}
      />

      <Stack.Screen
        name="BaoGia"
        component={BaoGia}
        options={{ headerShown: false, headerShadowVisible: false }}
      />
      <Stack.Screen
        name="ThongTin"
        component={ThongTin}
        options={{ headerShown: false, headerShadowVisible: false }}
      />
      <Stack.Screen
        name="XacNhan"
        component={XacNhan}
        options={{ headerShown: false, headerShadowVisible: false }}
      />
    </Stack.Navigator>
  );
}
