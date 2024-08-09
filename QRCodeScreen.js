import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { useNavigation } from "@react-navigation/native";

const QrCodeScreen = () => {
  const navigation = useNavigation();
  const qrData = {
    name: "Argulawaru Rithika",
    address: "plot no 95 WestSide",
    products: [
      { name: "Milk", quantity: "2 Nos" },
      { name: "Curd", quantity: "1 No" },
      { name: "Paneer", quantity: "290 grms" },
    ],
  };

  const handleQrScanned = () => {
    navigation.navigate("CustomerDetailsScreen", { qrData });
  };

  return (
    <View style={styles.container}>
      <View style={styles.whiteBox}>
        <Text style={styles.heading}>Customer QR Code</Text>
        <QRCode value={JSON.stringify(qrData)} size={200} />
        <TouchableOpacity
          style={styles.button}
          onPress={handleQrScanned} // Use the function directly
        >
          <Text style={styles.buttonText}>SHOW QR CODE</Text>
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

export default QrCodeScreen;
