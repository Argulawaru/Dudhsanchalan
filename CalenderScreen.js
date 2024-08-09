// CalendarScreen.js

import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/cal.png")} style={styles.image} />
      <View style={styles.footerContainer}>
        <Image
          source={require("../assets/splashscreen.png")}
          style={styles.footerImage}
        />
        <Text style={styles.footerText}>DUDHSANCHALAN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#35681A",
    padding: 40,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  footerContainer: {
    position: "absolute",
    bottom: 30, // Adjust this value to move the text up or down
    alignItems: "center",
  },
  footerImage: {
    width: 50, // Adjust the size of the image as needed
    height: 50,
    marginBottom: 10,
  },
  footerText: {
    color: "#fff", // White color
    fontSize: 14,
  },
});

export default CalendarScreen;
