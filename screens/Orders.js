import { StyleSheet,SafeAreaView, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import styles from "../styles/Orders.styles";
import { Avatar } from "@rneui/base";
import { FlatList } from "react-native";
import { Image } from "react-native";

const Orders = ({ navigation }) => {
  const DATA = [
    {
      id: 1,
      title: "My Orders",
      path: "Orders",
    },
    {
      id: 2,
      title: "Favourites",
      path: "Favourite",
    },
    {
      id: 3,
      title: "Shipping addresses",
      path: "Addresses",
    },
    {
      id: 4,
      title: "Settings",
      path: "Settings",
    },
    {},
    {},
    {},
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("search");
          }}
        >
          <Ionicons name="search" size={25} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>My Orders</Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item title={item.title} navigation={navigation} path={item.path} />
          )}
          style={{
            marginTop: SIZES.xLarge,
            marginHorizontal: SIZES.medium,
            marginBottom: SIZES.xxLarge + 80,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const Item = ({ title }) => (
  <View style={styles.card}>
    <View style={styles.subcard1}>
      <Image
        style={styles.image}
        source={{
          uri: "https://buildoo.co.in/files/productImage/YWo5qHVucUmsLiVBGPsivA.png",
        }}
      />
    </View>
    <View style={styles.subcard2}>
      <View style={styles.row1}>
        <Text style={styles.row1t1}>Order No. 1947034</Text>
        <Text style={styles.row1t2}>05-12-2019</Text>
      </View>
      <View style={styles.row2}>
        <Text style={styles.row2t1} numberOfLines={1}>
          Product
        </Text>
        <Text style={styles.row2t2}>Delivered</Text>
      </View>
      <View style={styles.row3}>
        <Text style={styles.row3t1}>
          Quantity: <Text style={styles.bold}>3</Text>
        </Text>
        <Text style={styles.bold}>₹ 112</Text>
      </View>
    </View>
  </View>
);

export default Orders;
