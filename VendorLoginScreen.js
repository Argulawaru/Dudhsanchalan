import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Alert,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const VendorLoginScreen = () => {
  const [vendorId, setVendorId] = useState(""); // Initially empty
  const [password, setPassword] = useState(""); // Initially empty
  const navigation = useNavigation();

  const handleLogin = () => {
    if (vendorId === "9849035759" && password === "1234abc") {
      // Proceed with login
      console.log("Vendor login with ID:", vendorId);
      // Navigate to Vendor screen after login
      navigation.navigate("VendorSplashScreen");
    } else if (!vendorId && !password) {
      Alert.alert("Error!", "All Fields are required");
    } else if (!vendorId) {
      Alert.alert("Error!", "Enter vendorId");
    } else if (!password) {
      Alert.alert("Error!", "Enter password");
    } else {
      // Show an error alert
      Alert.alert("Login Failed", "Vendor ID or password is incorrect.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <View style={styles.whiteBox}>
            <Text style={styles.heading}>Vendor Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Vendor ID"
              value={vendorId}
              onChangeText={setVendorId}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#35681A",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    width: "80%",

    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#35681A", // Green color
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#35681A", // Green color
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff", // White color for the text
  },
  input: {
    width: "80%",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
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

export default VendorLoginScreen;
