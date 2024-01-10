import React, { useState, useRef } from "react";
import { View, Text, PanResponder, StyleSheet, Animated } from "react-native";
import Style from "../assets/Style/Style";

export default function SliderCustom() {
  const maxPosition = 350; // vi tri max
  const minPosition = 50; // vi tri min
  const range = maxPosition - minPosition; // range
  const percentStep = 25; // 1 buoc nhay 25%
  const stepValue = (300 / 100) * percentStep; // khoang cach pixel 1 buoc nhay
  const [currentPosition, setCurrentPosition] = useState(
    maxPosition / 2 + minPosition
  );

  const scaleValue = useRef(new Animated.Value(1)).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const newPosition = Math.max(
        minPosition,
        Math.min(maxPosition, gestureState.moveX)
      );
      const snappedPosition = Math.round(newPosition / stepValue) * stepValue;
      setCurrentPosition(snappedPosition);

      Animated.timing(scaleValue, {
        toValue: 1.4,
        duration: 10,
        useNativeDriver: true,
      }).start();
    },
    onPanResponderRelease: () => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 10,
        useNativeDriver: true,
      }).start();
    },
  });

  const calculatePercentage = () => {
    const percentage = ((currentPosition - stepValue) / range) * 100;
    return Math.floor(percentage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderTrack} />
      <Animated.View
        style={[
          styles.sliderButton,
          {
            left: currentPosition - styles.sliderButton.width / 2 - 45,
            transform: [{ scale: scaleValue }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        {/* <Text>{calculatePercentage()}%</Text>  mo len xem %*/}
      </Animated.View>

      <View style={styles.labelsContainer}>
        <Text style={styles.label}>-10%</Text>
        <Text style={styles.label}>-5%</Text>
        <Text style={styles.label}>0%</Text>
        <Text style={styles.label}>5%</Text>
        <Text style={styles.label}>10%</Text>
      </View>
      <Text style={styles.description}>
        Phí bảo hiểm sẽ thay đổi theo giá trị bạn nhập
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    // marginLeft: 20,
  },
  sliderTrack: {
    width: 310,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginLeft: 30,
    height: 2,
    backgroundColor: "#49B4F6",
  },
  sliderButton: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 70,
    borderRadius: 100,
    shadowColor: "#333",
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 1.84,

    elevation: 10,
    shadowRadius: 3.84,
  },
  labelsContainer: {
    width: "90%",
    height: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  label: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
    // marginLeft: 5,
  },
  description: {
    ...Style.h4,
    color: "#8F8F8F",
    fontWeight: "bold",
    marginVertical: 5,
    // marginLeft: 20,
    alignSelf: "flex-start",
  },
});
