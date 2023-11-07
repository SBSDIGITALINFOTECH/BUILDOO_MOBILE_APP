import { Text, View } from "react-native";
import React from "react";
import styles from "./catCard.styles";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CatCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("ProductDetails")}
    >
      <View style={styles.card}>
        <View style={styles.details}>
          <Text style={styles.catName}>Steel Bars</Text>
        </View>
        <Image
          source={{
            uri: "https://buildoo.co.in/files/categoryImage/BQZl5ZpJiU2p6y3OoJ9mFw.png",
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CatCard;
