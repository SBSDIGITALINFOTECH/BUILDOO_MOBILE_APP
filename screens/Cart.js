import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useRef } from "react";
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
import {
  deleteproductfromCart,
  modifyQty,
  viewCartDetails,
} from "../config/API";
import { TokenContext } from "../store/TokenContext";
import { useFocusEffect } from "@react-navigation/native";
import ImptyCartImage from "../assets/emptyCart.png";
import Loader from "../component/common/loader/Loader";

function Cart({ route, navigation }) {
  const { token, guestID, loader, openLoader, closeLoader } =
    useContext(TokenContext);
  const [list, setList] = useState(null);
  const [list2, setList2] = useState([]);

  const fetchCartData = () => {
    console.log(guestID);
    openLoader();
    viewCartDetails(guestID)
      .then((res) => {
        if (res.data.success) {
          setList(res.data.data2);
          setList2(res.data.data);
        } else {
          setList([]);
          setList2([]);
        }
      })
      .catch((err) => {})
      .finally(() => {
        closeLoader();
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      // This function will be called every time the screen is focused
      fetchCartData();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      {loader ? (
        <Loader />
      ) : (
        <>
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
          { list2.length ? (
            <>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={list2}
                keyExtractor={(item) => item.productId}
                renderItem={({ item }) => (
                  <Item
                    item={item}
                    navigation={navigation}
                    fetchCartData={fetchCartData}
                  />
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
                  <Text style={styles.amm}>₹ {list?.alltotal}</Text>
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
            </>
          ) : (
            <View style={{ flex: 1 }}>
              <Image
                style={{ width: SIZES.width, height: SIZES.width }}
                source={ImptyCartImage}
              />
              <Text
                style={{
                  fontFamily: "bold",
                  fontSize: SIZES.xLarge,
                  textAlign: "center",
                }}
              >
                Your Cart is <Text style={{ color: "red" }}>Empty</Text>
              </Text>
              <View style={{ ...styles.bottomContainerEmpty, bottom: 0 }}>
                <Button
                  title="Browse Products"
                  titleStyle={{ fontFamily: "bold" }}
                  buttonStyle={{
                    backgroundColor: "#008b76",
                    borderColor: "transparent",
                    borderWidth: 0,
                    paddingVertical: SIZES.small,
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: SIZES.width,
                    paddingHorizontal: SIZES.medium,
                    marginVertical: 20,
                  }}
                  onPress={() => navigation.navigate("Home")}
                />
              </View>
            </View>
          )}
        </>
      )}
      <StatusBar
        backgroundColor={COLORS.lightWhite}
        barStyle="dark-content"
        style={COLORS.black}
      />
    </SafeAreaView>
  );
}

const Item = ({ navigation, item, fetchCartData }) => {
  const { token, guestID } = useContext(TokenContext);
  const [active, setActive] = useState(false);
  const hendleCountMinus = () => {
    const data = {
      guestId: guestID,
      modifyType: "minus",
      productId: item.productId,
    };
    modifyQty(data)
      .then((res) => {
        if (res.data.success) {
          fetchCartData();
        } else {
        }
      })
      .catch((err) => {});
  };
  const hendleCountPlus = () => {
    const data = {
      guestId: guestID,
      modifyType: "add",
      productId: item.productId,
    };
    modifyQty(data)
      .then((res) => {
        if (res.data.success) {
          fetchCartData();
        } else {
        }
      })
      .catch((err) => {});
  };
  const hendleDelete = () => {
    const data = { guestId: guestID, productId: item.productId };
    deleteproductfromCart(data)
      .then((res) => {
        if (res.data.success) {
          fetchCartData();
        } else {
        }
      })
      .catch((err) => {});
  };
  return (
    <View style={styles.card}>
      <View style={styles.subcard1}>
        <Image
          style={styles.image}
          source={{
            uri: item?.image,
          }}
        />
      </View>
      <View style={styles.subcard2}>
        <View style={styles.row1}>
          <Text style={styles.row1t1}>{item?.productName}</Text>
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
            Weight : {item.weight} KG
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
            <Text style={styles.ratingText}>{item?.qty}</Text>
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
          <Text style={styles.bold}>₹ {item?.totalprice * item?.qty}</Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;
