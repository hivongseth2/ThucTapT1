import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from "react-native";
import StyleCheckBox from "../assets/Style/StyleCheckBox";

export default function CheckBox() {
  const [status, setStatus] = useState(false);
  const fadeAnim = useRef(new Animated.Value(5)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 5,
      duration: 300,
      easing: Easing.linear,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 32,
      duration: 300,
      easing: Easing.linear,
    }).start();
  };

  const handlePress = () => {
    setStatus(!status);
    if (!status) {
      fadeOut();
    } else {
      fadeIn();
    }
  };

  const animatedStyle = {
    marginLeft: fadeAnim,
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        style={StyleCheckBox.containerCheckBox}
      >
        <Animated.View
          style={[
            StyleCheckBox.circle,
            animatedStyle,
            { backgroundColor: status ? "#21BCFE" : "#ccc" },
          ]}
        ></Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
