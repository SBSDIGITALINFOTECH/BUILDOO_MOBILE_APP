import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/ProductDetails.styles";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { Rating } from "react-native-ratings";
import ProductRow from "../component/common/products/ProductRow";
import Headings from "../component/common/Headings/Headings";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);

  const hendleCountPlus = () => {
    return setCount(count + 1);
  };
  const hendleCountMinus = () => {
    if (count > 1) {
      return setCount(count - 1);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.upperRow}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Favourite");
            }}
          >
            <Ionicons name="heart" size={30} color="red" />
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: "https://buildoo.co.in/files/productImage/YWo5qHVucUmsLiVBGPsivA.png",
          }}
          style={styles.image}
        />

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.title}>Product</Text>
              <Text style={styles.subtitle}>By Himanshu</Text>
            </View>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>₹ 600.00</Text>
            </View>
          </View>
          <View style={styles.reviewContainer}>
            <View style={styles.rating}>
              <Rating
                style={{}}
                readonly
                startingValue={4.5}
                showRating={false}
                imageSize={SIZES.large}
                ratingCount={5}
              />
              <Text style={styles.ratingText}>(4.5)</Text>
            </View>
            <View style={styles.rating}>
              <TouchableOpacity
                onPress={() => {
                  hendleCountMinus();
                }}
              >
                <SimpleLineIcons name="minus" size={25} />
              </TouchableOpacity>
              <Text style={styles.ratingText}>{count}</Text>
              <TouchableOpacity
                onPress={() => {
                  hendleCountPlus();
                }}
              >
                <SimpleLineIcons name="plus" size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
          <Headings title="You May Like" />
          <ProductRow />
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("Cart")}
          style={styles.bottomBox1}
        >
          <Text style={styles.bottomBoxText1}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBox2}
          activeOpacity={1}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.bottomBoxText2}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
