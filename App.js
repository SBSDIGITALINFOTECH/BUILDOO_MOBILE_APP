import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import BottomNav from "./navigation/BottomNav";
import Search from "./screens/Search"
import ProductDetails from "./screens/ProductDetails";
import Favourite from "./screens/Favourite";
import Settings from "./screens/Settings";
import Orders from "./screens/Orders";
import Addresses from "./screens/Addresses";
import { PaperProvider } from "react-native-paper";
import Checkout from "./screens/Checkout/Checkout";
import That from "./screens/That";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="bottomnav" component={BottomNav} options={{headerShown:false}}/>
      <Stack.Screen name="search" component={Search} options={{headerShown:false}}/>
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false}}/>
      <Stack.Screen name="Favourite" component={Favourite} options={{headerShown:false}}/>
      <Stack.Screen name="Orders" component={Orders} options={{headerShown:false}}/>
      <Stack.Screen name="Addresses" component={Addresses} options={{headerShown:false}}/>
      <Stack.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
      <Stack.Screen name="checkout" component={Checkout} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
