// AddProductsScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

const AddProductsScreen = ({ route, navigation }) => {
  const { customerDetails } = route.params;

  const [cart, setCart] = useState({});

  const products = [
    { id: "1", name: "Milk", price: 20, image: require("../assets/milk.jpeg") },
    { id: "2", name: "Curd", price: 30, image: require("../assets/curd.jpeg") },
    {
      id: "3",
      name: "Paneer",
      price: 50,
      image: require("../assets/paneer.jpeg"),
    },
  ];
  const handlebuttomScreen = () => {
    navigation.navigate("TickSplash");
  };
  const addToCart = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productId] > 0) {
        newCart[productId] -= 1;
        if (newCart[productId] === 0) {
          delete newCart[productId];
        }
      }
      return newCart;
    });
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => removeFromCart(item.id)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{cart[item.id] || 0}</Text>
        <TouchableOpacity
          onPress={() => addToCart(item.id)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const getTotal = () => {
    return products.reduce((total, product) => {
      return total + (cart[product.id] || 0) * product.price;
    }, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Customer Name: {customerDetails.name}</Text>
      <Text style={styles.text}>
        Customer Address: {customerDetails.address}
      </Text>
      <View style={styles.whiteBox}>
        <Text style={styles.heading}>Products Ordered:</Text>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.total}>Total: ${getTotal()}</Text>
        <TouchableOpacity
          style={styles.buttonforproducts}
          onPress={handlebuttomScreen} // Use the function directly
        >
          <Text style={styles.buttonprodText}>ADD PRODUCTS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#35681A",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "#fff",
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonforproducts: {
    backgroundColor: "#35681A", // Green color
    padding: 15,
    borderRadius: 20,
    width: "80%",
    marginBottom: 20,
  },
  buttonprodText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff", // White color for the text
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#35681A", // Green color
    marginBottom: 20,
  },
  whiteBox: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  productName: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
});

export default AddProductsScreen;
