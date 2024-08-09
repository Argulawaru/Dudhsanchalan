import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timeout to navigate to the next screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace("Home"); // Replace with the actual name of your next screen
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splashscreen.png")} // Ensure this path is correct
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
    backgroundColor: "#35681A",
  },
  logo: {
    width: 300, // Adjust the width as needed
    height: 300, // Adjust the height as needed
    alignItems: "center",
    marginTop: 200,
  },
});

export default SplashScreen;
