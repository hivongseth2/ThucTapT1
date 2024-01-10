import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ThongTinXe from "./Views/ThongTinXe";
import Style from "./assets/Style/Style";
import Header from "./Component/Header";
import { ProgressProvider } from "./Component/ProgessContext";
import StepsProgess from "./Component/StepsProgess";
import { NavigationContainer } from "@react-navigation/native";

import Router from "./router/Router";
import { useState } from "react";
export default function App() {
  const [isNavigatorReady, setNavigatorReady] = useState(false);

  const handleNavigatorReady = () => {
    setNavigatorReady(true);
  };

  return (
    <ProgressProvider>
      <NavigationContainer onReady={handleNavigatorReady}>
        <View style={{ backgroundColor: "black", height: 30 }}></View>
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
            <Router />
          </View>
        </View>
      </NavigationContainer>
    </ProgressProvider>
  );
}
