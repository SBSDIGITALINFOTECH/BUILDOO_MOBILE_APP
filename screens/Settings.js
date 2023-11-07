import { StyleSheet,SafeAreaView, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import styles from "../styles/Settings.styles";
import { TextInput } from "react-native-paper";

const Settings = ({ navigation }) => {
  
  const[text,setText] = useState('')
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
        <Text style={styles.heading}>Settings</Text>
        <Text style={styles.subheading}>Personal Information</Text>
      </View>
      <TextInput activeOutlineColor="red" label="Label"  variant="standard" color='red' />
    </SafeAreaView>
  );
};

export default Settings;
