import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/ProductDetails.styles";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { Rating } from "react-native-ratings";
import ProductRow from "../component/common/products/ProductRow";
import Headings from "../component/common/Headings/Headings";
import { addToCartApi, getProductDetailsbyID } from "../config/API";
import HTML from "react-native-render-html";
import { TokenContext } from "../store/TokenContext";

const ProductDetails = ({ route, navigation }) => {
  const { token, guestID } = useContext(TokenContext);
  const { width } = useWindowDimensions();
  const [count, setCount] = useState(1);
  const [productDetails, setProductDetails] = useState();
  const { productId } = route.params;

  const hendleCountPlus = () => {
    return setCount(count + 1);
  };
  const hendleCountMinus = () => {
    if (count > 1) {
      return setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    const data = {
      guestId: guestID,
      productId: productId,
      qty: count,
    };
    addToCartApi(data)
      .then((res) => {
        if (res.data.success) {
          navigation.navigate("Cart");
        } else {
        }
      })
      .catch((err) => {});
  };

  const onLoad = () => {
    getProductDetailsbyID(productId).then((res) => {
      if (res.data.success) {
        setProductDetails(res.data.data[0]);
      } else {
        setProductDetails({});
      }
    });
  };
  useEffect(() => {
    onLoad();
  }, []);

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
            uri: productDetails?.image
          }}
          style={styles.image}
        />

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <View style={{ width: "80%" }}>
              <Text style={styles.title}>{productDetails?.im.productName}</Text>
              <Text style={styles.subtitle}>
                By {productDetails?.storeName}
              </Text>
            </View>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>
                ₹ {productDetails?.im.specialPrice}
              </Text>
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
              <HTML
                contentWidth={width}
                source={{
                  html: productDetails
                    ? productDetails?.im.description
                    : "<p>No description</p>",
                }}
              />
            </Text>
          </View>
          <Headings title="You May Like" />
          <ProductRow />
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handleAddToCart()}
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
