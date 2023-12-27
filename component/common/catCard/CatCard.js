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
      onPress={() => navigation.navigate("search")}
      style={styles.card}
    >
      <Image
        source={{
          uri:
            item.categoryImagePath != ""
              ? item.categoryImagePath
              : "https://www.deveninfotech.com/wp-content/themes/consultix/images/no-image-found-360x250.png",
        }}
        style={styles.image}
      />
      <Text style={styles.catName}>{item.categoryName}</Text>
    </TouchableOpacity>
  );
};

export default CatCard;
