// VendorScreen.js
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";

const VendorScreen = ({ navigation }) => {
  const handleshowQrCode = () => {
    navigation.navigate("QrCodeScanner");
  };
  return (
    <View style={styles.container}>
      <View style={styles.whitebox}>
        <Text style={styles.heading}>Hello Vendor!</Text>
        <Image
          source={require("../assets/camera.png")}
          style={styles.cameraImage}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleshowQrCode} // Use the function directly
        >
          <Text style={styles.buttonText}>SCAN QR CODE</Text>
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
  whitebox: {
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
    borderRadius: 0,
    width: "65.3%",
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
  cameraImage: {
    width: 200,
    height: 200,
  },
  footerText: {
    color: "#fff", // White color
    fontSize: 14,
  },
});

export default VendorScreen;
