import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  View,
} from "react-native";
import styles from "../styles/Home.styles";
import { COLORS, SIZES } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Carousel from "../component/common/carousel/Carousel";
import Headings from "../component/common/Headings/Headings";
import ProductRow from "../component/common/products/ProductRow";
import { getProductList } from "../config/API";
import { TokenContext } from "../store/TokenContext";
import Loader from "../component/common/loader/Loader";

function Home() {
  const { loader, openLoader, closeLoader } = useContext(TokenContext);
  const navigation = useNavigation();
  const [productList, setProductList] = useState([]);
  const onLoad = () => {
    openLoader();
    getProductList({ page: 1 })
      .then((res) => {
        if (res.data.success) {
          setProductList(res.data.data);
        } else {
          setProductList([]);
        }
      })
      .catch((err) => {})
      .finally(() => {
        closeLoader();
      });
  };
  useEffect(() => {
    onLoad();
  }, []);
  return (
    <SafeAreaView>
      {loader ? (
        <Loader />
      ) : (
        <View style={{ height: "100%" }}>
          <View style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <View style={styles.searchContainer}>
              <TouchableOpacity>
                <Ionicons
                  name="search"
                  style={styles.searchIcon}
                  size={24}
                  color={COLORS.black}
                />
              </TouchableOpacity>
              <View style={styles.searchWrapper}>
                <TextInput
                  style={styles.searchInput}
                  value=""
                  onPressIn={() => {
                    navigation.navigate("search");
                  }}
                  placeholder="What are you looking for"
                />
              </View>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <View style={Platform.OS === "ios" ?styles.ScrollViewios: styles.ScrollViewandroid}> */}
            <Carousel />
            <Headings title="New Rivals" style={{ marginHorizontal: 12 }} />
            <ProductRow
              style={{ marginTop: SIZES.medium }}
              products={productList}
            />
            <Headings title="New Rivals" style={{ marginHorizontal: 12 }} />
            <ProductRow
              style={{ marginTop: SIZES.medium, marginBottom: SIZES.medium }}
              products={productList}
            />

            {/* <ProductRow />
          <ProductRow style={{ marginBottom: SIZES.medium }} /> */}
            {/* <View style={styles.cardContainer}>

        </View> */}
            {/* </View> */}
          </ScrollView>
        </View>
      )}
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
        style={COLORS.black}
      />
    </SafeAreaView>
  );
}

export default Home;
