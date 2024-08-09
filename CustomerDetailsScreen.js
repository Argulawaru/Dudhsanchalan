import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CustomerDetailsScreen = ({ route }) => {
  const { qrData } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.whiteBox}>
        <Text style={styles.heading}>Customer Details</Text>
        <Text>Customer Name: {qrData.name}</Text>
        <Text>Customer Address: {qrData.address}</Text>
        <Text>Products Ordered:</Text>
        {qrData.products.map((product, index) => (
          <Text key={index}>
            {product.name}: {product.quantity}
          </Text>
        ))}
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
    backgroundColor: "#35681A",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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

export default CustomerDetailsScreen;
