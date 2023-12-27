import { View, Text } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Login from "../screens/auth/Login";
import ForgettPassword from "../screens/auth/ForgettPassword";
import OTP from "../screens/auth/OTP";
import ResetPass from "../screens/auth/ResetPass";
import Signup from "../screens/auth/Signup";
import Addresses from "../screens/Addresses";
import Cart from "../screens/Cart";
import Category from "../screens/Category";
import Check from "../screens/Check";
import Checkout from "../screens/Checkout/Checkout";
import OrderSuccessfull from "../screens/Checkout/OrderSuccessfull";
import Favourite from "../screens/Favourite";
import Home from "../screens/Home";
import MyProfile from "../screens/MyProfile";
import Orders from "../screens/Orders";
import ProductDetails from "../screens/ProductDetails";
import Search from "../screens/Search";
import Settings from "../screens/Settings";
import BottomNav from "./BottomNav";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TokenContext } from "../store/TokenContext";



const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { token, addToken, removeToken } = useContext(TokenContext);

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="bottomnav"
          component={BottomNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false,animation:'slide_from_right' }}
        />
        <Stack.Screen
          name="Favourite"
          component={Favourite}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Addresses"
          component={Addresses}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="checkout"
          component={Checkout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="orderSuccessfull"
          component={OrderSuccessfull}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgettPassword"
          component={ForgettPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ResetPass"
          component={ResetPass}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
