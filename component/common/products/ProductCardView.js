import { View, Text,TouchableWithoutFeedback, Image, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./productCardView.style";
import { AirbnbRating, Rating } from "react-native-ratings";
import { SIZES } from "../../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback onPress={() => {navigation.navigate("ProductDetails")}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://buildoo.co.in/files/productImage/YWo5qHVucUmsLiVBGPsivA.png",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.reviewContainer}>
            <Rating
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                marginVertical: SIZES.small - 5,
              }}
              readonly
              startingValue={4.5}
              showRating={false}
              imageSize={SIZES.medium}
              ratingCount={5}
            />
            <Text style={{ marginLeft: 3 }}>(4)</Text>
          </View>
          <Text style={styles.category} numberOfLines={1}>
            ProductCardView
          </Text>
          <Text style={styles.title} numberOfLines={1}>
            ProductCardView
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            <Text style={styles.sprice} numberOfLines={1}>
              ₹ 2022
            </Text>{" "}
            ₹ 2022
          </Text>

          <Pressable
            style={styles.favourite}
            onPress={() => setLiked((isLiked) => !isLiked)}
          >
            <View style={styles.circle}>
              <MaterialCommunityIcons
                name={liked ? "heart" : "heart-outline"}
                size={18}
                color={liked ? "red" : "black"}
              />
            </View>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCardView;
