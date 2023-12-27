import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import styles from "../styles/Cart.styles";
import { FlatList } from "react-native";
import { useState } from "react";
import { Button } from "@rneui/themed";
function Cart({ navigation }) {
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
    {
      id: 5,
      title: "Shipping addresses",
      path: "Addresses",
    },
    {
      id: 6,
      title: "Settings",
      path: "Settings",
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
        <Text style={styles.heading}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item title={item.title} navigation={navigation} path={item.path} />
        )}
        style={{
          marginTop: SIZES.large,
          marginHorizontal: SIZES.medium,
          marginBottom: 100,
        }}
      />
      <View style={{ ...styles.bottomContainer, bottom: 0 }}>
        <View style={styles.sec}>
          <Text style={styles.ttl}>Total amount:</Text>
          <Text style={styles.amm}>₹ 124.00</Text>
        </View>
        <Button
          title="CHECK OUT"
          titleStyle={{ fontFamily: "bold" }}
          buttonStyle={{
            backgroundColor: COLORS.green2,
            borderColor: "transparent",
            borderWidth: 0,
            paddingVertical: SIZES.small,
            borderRadius: 30,
          }}
          containerStyle={{
            width: SIZES.width,
            paddingHorizontal: SIZES.medium,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate("checkout")}
        />
      </View>
      <StatusBar
          backgroundColor={COLORS.lightWhite}
          barStyle="dark-content"
          style={COLORS.black}
        />
    </SafeAreaView>
  );
}

const Item = ({ title }) => {
  const [count, setCount] = useState(1);
  const [active, setActive] = useState(false);
  const hendleCountMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const hendleCountPlus = () => {
    setCount(count + 1);
  };
  const hendleDelete = () => {
    setCount(1);
  };
  return (
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
          <Text style={styles.row1t1}>Product Name</Text>
          {active ? (
            <AntDesign
              name="heart"
              size={24}
              color="red"
              onPress={() => {
                setActive(false);
              }}
            />
          ) : (
            <AntDesign
              name="hearto"
              size={24}
              color="black"
              onPress={() => {
                setActive(true);
              }}
            />
          )}
        </View>
        <View style={styles.row2}>
          <Text style={styles.row2t1} numberOfLines={1}>
            Weight : 10 KG
          </Text>
          {/* <Text style={styles.row2t2}>Delivered</Text> */}
        </View>
        <View style={styles.row3}>
          <View style={styles.rating}>
            <TouchableOpacity
              onPress={() => {
                hendleCountMinus();
              }}
              activeOpacity={0.7}
            >
              <Entypo
                style={styles.increIcon}
                name="minus"
                size={25}
                color="grey"
              />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                hendleCountPlus();
              }}
              activeOpacity={0.7}
            >
              <Entypo
                style={styles.increIcon}
                name="plus"
                size={25}
                color="grey"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                hendleDelete();
              }}
            >
              <MaterialIcons
                name="delete-outline"
                style={{ marginLeft: 10 }}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.bold}>₹ 112</Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;
