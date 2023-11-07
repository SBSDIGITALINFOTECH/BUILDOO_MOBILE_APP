import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import styles from "../styles/Category.styles";
import { FlatList } from "react-native";
import CatCard from "../component/common/catCard/CatCard";

const Category = ({ navigation }) => {
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
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("search");
          }}
        >
          <Ionicons name="search" size={25} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Categories</Text>

        <FlatList
          refreshing={false}
          onRefresh={() => {}}
          showsVerticalScrollIndicator={false}
          data={SearchResult}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CatCard item={item} />}
          style={[
            {
              marginHorizontal: 20,
              marginTop: SIZES.large,
            },
            Platform.OS === "ios"
              ? { marginBottom: SIZES.large + 90 }
              : { marginBottom: SIZES.large + 150 },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default Category;
