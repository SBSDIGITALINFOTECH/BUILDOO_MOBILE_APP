import { Text, View,SafeAreaView } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import styles from "../styles/Address.styles";
import { FlatList } from "react-native";
import AddressesCard from "../component/common/addressCard/AddressCard";

const Addresses = ({ navigation }) => {
  const SearchResult = [
    {
      id: 1,
      name: "Product",
      selected: false,
    },
    {
      id: 2,
      name: "Product",
      selected: false,
    },
    {
      id: 3,
      name: "Product",
      selected: true,
    },
    {
      id: 4,
      name: "Product",
      selected: false,
    },
    {
      id: 5,
      name: "Product",
      selected: false,
    },
    {
      id: 6,
      name: "Product",
      selected: false,
    },
    {
      id: 7,
      name: "Product",
      selected: false,
    },
    {
      id: 8,
      name: "Product",
      selected: false,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={22} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Addresses</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.addIcon}
        >
          <AntDesign name="plus" size={22} />
        </TouchableOpacity>
      </View>
      <FlatList
        refreshing={false}
        onRefresh={() => {}}
        showsVerticalScrollIndicator={false}
        data={SearchResult}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AddressesCard item={item} />}
        style={{
          marginHorizontal: 20,
          marginTop: SIZES.large,
          // marginBottom: SIZES.large + 50,
        }}
      />
    </SafeAreaView>
  );
};

export default Addresses;
