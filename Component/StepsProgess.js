import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useProgress } from "./ProgessContext";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import StyleStep from "../assets/Style/StyleSep";
export default function StepsProgess({ step, name, end }) {
  const fadeAnim = useState(new Animated.Value(1))[0];
  const [status, setStatus] = useState(false);
  const { progess, updateProgress } = useProgress();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  let animatedStyle = {
    backgroundColor: fadeAnim.interpolate({
      inputRange: [0, 1, 2],
      outputRange: ["#47B6F3", "#E9E9E9", "#FFFF"], // xanh , trắng , đen
    }),
  };

  let animatedCircleStyle = {
    backgroundColor: fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["#47B6F3", "#FFFF"],
    }),
  };

  useEffect(() => {
    if (status) {
      fadeIn();
    } else if (step == progess) {
      select();
    } else {
      fadeOut();
    }
  });
  useEffect(() => {
    if (progess > step) {
      setStatus(true);
    } else setStatus(false);
  }, [progess]);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.cubic,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  };

  const select = () => {
    Animated.timing(fadeAnim, {
      toValue: 2,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    if (isFocused) {
      switch (progess) {
        case 1:
          navigation?.navigate("Xe");
          break;
        case 2:
          navigation?.navigate("QuyenLoi");
          break;
        case 3:
          navigation?.navigate("BaoGia");
          break;
        case 4:
          navigation?.navigate("ThongTin");
          break;
        case 5:
          navigation?.navigate("XacNhan");
          break;
        default:
          break;
      }
    }
  }, [progess, navigation, isFocused]);

  const handlePress = () => {
    updateProgress(step);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={StyleStep.containerStep}>
      <View style={StyleStep.hContainer}>
        <Animated.View
          style={[
            StyleStep.circle,
            {
              ...animatedStyle,
              borderColor: step == progess ? "#47B6F3" : "#E9E9E9",
              borderWidth: step == progess ? 1 : 0,
            },
          ]}
        >
          {step < progess ? (
            <Image
              style={StyleStep.tick}
              source={require("../assets/img/tick.png")}
            />
          ) : (
            <Text
              style={[
                StyleStep.stepNumber,
                { color: step == progess ? "#47B6F3" : "#FFFF" },
              ]}
            >
              {step}
            </Text>
          )}
        </Animated.View>
        {!end ? (
          <Animated.View
            style={[
              {
                width: 65,
                height: 2,
                ...animatedCircleStyle,
              },
            ]}
          ></Animated.View>
        ) : (
          <Animated.View
            style={[
              {
                width: 65,
                height: 2,
              },
            ]}
          ></Animated.View>
        )}
      </View>
      <View style={[StyleStep.nameContainer]}>
        <Text
          // numberOfLines={1}
          style={[StyleStep.name, { fontWeight: progess == step ? 500 : 400 }]}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
