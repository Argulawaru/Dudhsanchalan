import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CustomerScreen from "./screens/CustomerScreen";
import VendorScreen from "./screens/VendorScreen";
import QRCodeScreen from "./screens/QRCodeScreen";
import QRCodeScannerScreen from "./screens/QRCodeScannerScreen";

const AppNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: HomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Customer: CustomerScreen,
    Vendor: VendorScreen,
    QRCode: QRCodeScreen,
    QRCodeScanner: QRCodeScannerScreen,
  },
  {
    initialRouteName: "Splash",
  }
);

export default createAppContainer(AppNavigator);
