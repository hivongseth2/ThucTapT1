import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ThongTinXe from "./Views/ThongTinXe";
import Style from "./assets/Style/Style";
import Header from "./Component/Header";
import { ProgressProvider, useProgress } from "./Component/ProgessContext";
import StepsProgess from "./Component/StepsProgess";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import QuyenLoi from "./Views/QuyenLoi";
import BaoGia from "./Views/BaoGia";
import ThongTin from "./Views/ThongTin";
import XacNhan from "./Views/XacNhan";
import Router from "./router/Router";
import { useState } from "react";
export default function App() {
  const Stack = createNativeStackNavigator();
  const [isNavigatorReady, setNavigatorReady] = useState(false);

  const handleNavigatorReady = () => {
    setNavigatorReady(true);
  };

  return (
    <ProgressProvider>
      <NavigationContainer onReady={handleNavigatorReady}>
        <StatusBar barStyle="dark-content" />

        <View
          style={[
            Style.container,
            { backgroundColor: "#EFF5FF", width: "100%" },
          ]}
        >
          <Header></Header>
          {isNavigatorReady && (
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <StepsProgess step={1} name={"Thông tin xe"} />
              <StepsProgess step={2} name={"Quyền lợi"} />
              <StepsProgess step={3} name={"báo giá"} />
              <StepsProgess step={4} name={"Thông tin bảo hiểm"} />
              <StepsProgess step={5} name={"Xác nhận"} end={true} />
            </View>
          )}
          <View style={{ flex: 1, width: "100%" }}>
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
          </View>
        </View>
      </NavigationContainer>
    </ProgressProvider>
  );
}
