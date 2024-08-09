import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import CustomerLoginScreen from "./screens/CustomerLoginScreen";
import VendorLoginScreen from "./screens/VendorLoginScreen";
import CustomerRegisterScreen from "./screens/CustomerRegisterScreen";
import VendorRegisterScreen from "./screens/VendorRegisterScreen";
import CustomerScreen from "./screens/CustomerScreen";
import VendorScreen from "./screens/VendorScreen";
import QrCodeScreen from "./screens/QRCodeScreen";
import QrCodeScannerScreen from "./screens/QRCodeScannerScreen";
import CustomerAuthScreen from "./screens/CustomerAuthScreen";
import VendorAuthScreen from "./screens/VendorAuthScreen";
import CustomerDetailsScreen from "./screens/CustomerDetailsScreen.js";
import AddProductsScreen from "./screens/AddProductsScreen";
import CalendarScreen from "./screens/CalenderScreen.js";
import VendorSplashScreen from "./screens/VendorSplashScreen.js";
import TickSplash from "./screens/TickSplash.js";
import AmountPaidSplash from "./screens/AmoutPaidSplash.js";
import CustomerSplashScreen from "./screens/CustomerSplashScreen.js";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CustomerLogin" component={CustomerLoginScreen} />
        <Stack.Screen name="VendorLogin" component={VendorLoginScreen} />
        <Stack.Screen
          name="CustomerRegister"
          component={CustomerRegisterScreen}
        />
        <Stack.Screen
          name="VendorSplashScreen"
          component={VendorSplashScreen}
        />
        <Stack.Screen
          name="CustomerSplashScreen"
          component={CustomerSplashScreen}
        />
        <Stack.Screen name="AmountPaidSplash" component={AmountPaidSplash} />
        <Stack.Screen name="TickSplash" component={TickSplash} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="CustomerAuth" component={CustomerAuthScreen} />
        <Stack.Screen name="VendorAuth" component={VendorAuthScreen} />
        <Stack.Screen name="VendorRegister" component={VendorRegisterScreen} />
        <Stack.Screen name="Customer" component={CustomerScreen} />
        <Stack.Screen name="Vendor" component={VendorScreen} />
        <Stack.Screen name="QrCode" component={QrCodeScreen} />
        <Stack.Screen name="QrCodeScanner" component={QrCodeScannerScreen} />
        <Stack.Screen name="AddProductsScreen" component={AddProductsScreen} />
        <Stack.Screen
          name="CustomerDetailsScreen"
          component={CustomerDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
