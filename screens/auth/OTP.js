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
import React, { useState } from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import VerticleCard from "../../component/common/verticleCard/VerticleCard";
import styles from "./Auth.styles";
import { TextInput } from "react-native-paper";
import { Button } from "@rneui/themed";
import OTPTextInput from "react-native-otp-textinput";
import { StatusBar } from "react-native";

const OTP = ({ navigation }) => {
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={22} color={COLORS.black} />
        </TouchableOpacity>
        {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate("search");
              }}
            >
              <Ionicons name="search" size={25} color={COLORS.black} />
            </TouchableOpacity> */}
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>OTP</Text>
      </View>
      <Text
        style={{
          marginHorizontal: SIZES.xLarge,
          fontFamily: "semibold",
          marginTop: SIZES.xxLarge,
        }}
      >
        Please, enter OTP sent to your mail for Verify It's you.
      </Text>
      <View style={styles.form}>
        <OTPTextInput
          ref={(e) => (this.otpInput = e)}
          tintColor={COLORS.green2}
          containerStyle={{
            justifyContent: "center",
            marginVertical: SIZES.large,
          }}
        />
        <Button
          title="VERIFY"
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
            marginTop: SIZES.xLarge,
          }}
          onPress={() => navigation.navigate("ResetPass")}
        />
      </View>
    </SafeAreaView></SafeAreaView>
  );
};

export default OTP;
