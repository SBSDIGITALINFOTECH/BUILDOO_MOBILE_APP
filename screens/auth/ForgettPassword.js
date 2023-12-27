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
import styles from "./Auth.styles";
import { TextInput } from "react-native-paper";
import { Button } from "@rneui/themed";
import { StatusBar } from "react-native";
import { Formik } from "formik";
import { forgotPassword } from "../../schema/AuthSchema";

const ForgettPassword = ({ navigation }) => {
  const initialValues = {
    email: "",
  };
  const handleSubmit = (values) => {
    console.log(values.email, values.password);
    navigation.navigate("OTP")
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
          <Text style={styles.heading}>Forgot password</Text>
        </View>
        <Text
          style={{
            marginHorizontal: SIZES.xLarge,
            fontFamily: "semibold",
            marginTop: SIZES.xxLarge,
          }}
        >
          Please, enter your email address. You will receive a OTP to create a
          new password.
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={forgotPassword}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.form}>
              <TextInput
                activeOutlineColor={COLORS.green2}
                activeUnderlineColor={COLORS.green2}
                onChangeText={handleChange("email")}
                handleBlur={handleBlur("email")}
                value={values.email}
                error={touched.email && errors.email}
                label="Email"
                style={styles.input}
                outlineColor={COLORS.green2}
                variant="standard"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <Button
                title="Verify"
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
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default ForgettPassword;
