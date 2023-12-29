import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import CartLoader from "../../../assets/cartLoader.gif";
import { TokenContext } from "../../../store/TokenContext";

const Loader = () => {
  return (
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={CartLoader} />
        </View>
  );
};

export default Loader;
