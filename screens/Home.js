import React from "react";
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
import { COLORS } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Carousel from "../component/common/carousel/Carousel";
import Headings from "../component/common/Headings/Headings";
import ProductRow from "../component/common/products/ProductRow";

function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Platform.OS === "ios" ?styles.ScrollViewios: styles.ScrollViewandroid}>
          <Carousel />
          <Headings title='New Rivals' style={{marginHorizontal: 12}}/>
          <ProductRow />
          <ProductRow />
          <ProductRow />
          {/* <View style={styles.cardContainer}>

        </View> */}
        </View>
      </ScrollView>
      <StatusBar backgroundColor={COLORS.green} barStyle="default" style="auto"/>
    </SafeAreaView>
  );
}

export default Home;
