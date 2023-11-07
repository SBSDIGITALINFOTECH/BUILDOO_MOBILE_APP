import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styles from "../styles/Favrouite.styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import VerticleCard from "../component/common/verticleCard/VerticleCard";

const Favourite = ({ navigation }) => {
  const SearchResult = [
    {
      id: 1,
      name: "Product",
    },
    {
      id: 2,
      name: "Product",
    },
    {
      id: 3,
      name: "Product",
    },
    {
      id: 4,
      name: "Product",
    },
    {
      id: 5,
      name: "Product",
    },
    {
      id: 6,
      name: "Product",
    },
    {
      id: 7,
      name: "Product",
    },
    {
      id: 8,
      name: "Product",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-circle" size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Favourites</Text>
      </View> */}
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={22} color={COLORS.black} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("search");
          }}
        >
          <Ionicons name="search" size={25} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Favourites</Text>
        <FlatList
          refreshing={false}
          onRefresh={() => {}}
          showsVerticalScrollIndicator={false}
          data={SearchResult}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <VerticleCard item={item} />}
          style={[{ marginHorizontal: SIZES.medium, marginTop: SIZES.xLarge + 10 },Platform.OS === "ios" ? {marginBottom: SIZES.large+100}: null ]}
        />
      </View>
      </SafeAreaView>
  );
};

export default Favourite;
