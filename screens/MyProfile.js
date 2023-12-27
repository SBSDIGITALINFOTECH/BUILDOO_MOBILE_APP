import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import styles from "../styles/MyProfile.styles";
import { Avatar } from "@rneui/base";
import { FlatList } from "react-native";
import { StatusBar } from "react-native";
import { Button } from "@rneui/themed";
import { useContext } from "react";
import { TokenContext } from "../store/TokenContext";

const MyProfile = ({ navigation }) => {
  const { token,removeToken } = useContext(TokenContext);
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
    
  ];

  const handleLogout = ()=>{
    removeToken();
    navigation.navigate('Home');
  }

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
        <Text style={styles.heading}>My Profile</Text>
        {token === null || token === "" ? (
          <Button
            title="LOGIN"
            titleStyle={{ fontFamily: "semibold" }}
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
            onPress={() => navigation.navigate("Login")}
          />
        ) : (
          <>
            <View style={styles.headingRow}>
              <Avatar
                size={64}
                rounded
                source={{
                  uri: "https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg",
                }}
              />
              <View style={styles.headingRowCol}>
                <Text style={styles.headingText}>Matilda Brown</Text>
                <Text style={styles.headingText2}>matildabrown@gmail.com</Text>
              </View>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Item
                  title={item.title}
                  navigation={navigation}
                  path={item.path}
                />
              )}
              style={{ marginTop: SIZES.xLarge + 10 }}
            />
             <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => handleLogout()}
  >
    <View style={{...styles.item}}>
      <Text style={styles.title}>Logout</Text>
      <AntDesign name="right" size={16} color="#9b9b9b" />
    </View>
  </TouchableOpacity>
          </>
        )}
      </View>
      <StatusBar
        backgroundColor={COLORS.lightWhite}
        barStyle="dark-content"
        style={COLORS.black}
      />
    </SafeAreaView>
  );
};

const Item = ({ title, navigation, path }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => navigation.navigate(path)}
  >
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <AntDesign name="right" size={16} color="#9b9b9b" />
    </View>
  </TouchableOpacity>
);

export default MyProfile;
