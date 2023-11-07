import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./verticleCard.styles";
import { Rating } from "react-native-ratings";
import { SIZES } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const VerticleCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("ProductDetails")}>
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://buildoo.co.in/files/productImage/YWo5qHVucUmsLiVBGPsivA.png",
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.vendor}>By Himanshu</Text>
        <Text style={styles.title}>Product Name</Text>
        <View style={styles.combine}>
          <Text style={styles.price}>₹ 600.00</Text>
          <View style={styles.rating}>
            <Rating
              style={{
                alignItems: "center",
                alignContent: "center",
              }}
              readonly
              startingValue={4.5}
              showRating={false}
              imageSize={SIZES.small}
              ratingCount={5}
            />
            <Text style={styles.ratingText}>(4.5)</Text>
          </View>
        </View>
      </View>

      <Ionicons
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.closeButton}
        name="close"
        size={24}
        color="black"
      />
    </View>
    </TouchableOpacity>
  );
};

export default VerticleCard;
