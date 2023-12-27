import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import styles from "./productCardView.style";
import { AirbnbRating, Rating } from "react-native-ratings";
import { SIZES } from "../../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
// import LinearGradient from "expo-linear-gradient";
// const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const ProductCardView = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("ProductDetails", { productId: item.im.id });
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.productImage,
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
            {item.im.shortDescription}
          </Text>
          <Text style={styles.title} numberOfLines={1}>
            {item.im.productName}
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            <Text style={styles.sprice} numberOfLines={1}>
              ₹ {item.im.price}
            </Text>{" "}
            ₹ {item.im.specialPrice}
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

    // <View style={styles.container}>
    //   <ShimmerPlaceholder
    //     style={{
    //       width: "100%",
    //       height: 150,
    //       borderRadius: 20,
    //       padding: 10,
    //       marginTop: 10,
    //     }}
    //     visible={false}
    //   ></ShimmerPlaceholder>
    //   <ShimmerPlaceholder
    //     style={{
    //       width: "100%",
    //       height: 30,
    //       padding: 5,
    //       paddingHorizontal: 10,
    //     }}
    //     visible={false}
    //   ></ShimmerPlaceholder>
    //   <ShimmerPlaceholder
    //     style={{
    //       width: "100%",
    //       height: 30,
    //       padding: 5,
    //       paddingHorizontal: 10,
    //     }}
    //     visible={false}
    //   ></ShimmerPlaceholder>
    //   <ShimmerPlaceholder
    //     style={{
    //       width: "80%",
    //       height: 30,
    //       padding: 5,
    //       paddingHorizontal: 10,
    //     }}
    //     visible={false}
    //   ></ShimmerPlaceholder>
    //   <ShimmerPlaceholder
    //     style={{
    //       width: "100%",
    //       height: 30,
    //       padding: 5,
    //       paddingHorizontal: 10,
    //     }}
    //     visible={false}
    //   ></ShimmerPlaceholder>
    // </View>
  );
};

export default ProductCardView;
