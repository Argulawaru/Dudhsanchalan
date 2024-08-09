import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
const VendorRegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [vendorId, setVendorId] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Handle vendor registration logic here
    if (!name || !email || !vendorId || !password) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    navigation.navigate("VendorLogin");
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <View style={styles.whiteBox}>
            <Text style={styles.heading}>Vendor Register</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
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
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
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
  button: {
    backgroundColor: "#35681A", // Green color
    padding: 15,
    borderRadius: 10,
    width: "80%",
    marginBottom: 0,
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

export default VendorRegisterScreen;
