import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const CustomerAuthScreen = () => {
  const navigation = useNavigation();
  const handleCustomerLogin = () => {
    navigation.navigate("CustomerLogin");
  };
  const handleCustomerRegister = () => {
    navigation.navigate("CustomerRegister");
  };

  return (
    <View style={styles.container}>
      <View style={styles.whiteBox}>
        <Text style={styles.heading}>Hello Customer!</Text>
        <Text style={styles.question}>Register or Login?</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleCustomerLogin} // Use the function directly
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleCustomerRegister} // Use the function directly
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

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
    backgroundColor: "#35681A", // Green color
    alignItems: "center",
    justifyContent: "center",
  },
  whiteBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#35681A", // Green color
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    color: "#35681A", // Green color
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#35681A", // Green color
    padding: 15,
    borderRadius: 20,
    width: "80%",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff", // White color for the text
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

export default CustomerAuthScreen;
