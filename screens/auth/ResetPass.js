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
import { Formik } from "formik";
import styles from "./Auth.styles";
import { TextInput } from "react-native-paper";
import { Button } from "@rneui/themed";
import { StatusBar } from "react-native";
import { resetPassSchema } from "../../schema/AuthSchema";

const ResetPass = ({ navigation }) => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleSubmit = (values) => {
    console.log(values.email, values.password);
    navigation.navigate("OTP");
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
          <Text style={styles.heading}>Reset Password</Text>
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={resetPassSchema}
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
                onChangeText={handleChange("password")}
                handleBlur={handleBlur("password")}
                value={values.password}
                error={touched.password && errors.password}
                label="Password"
                style={styles.input}
                outlineColor={COLORS.green2}
                variant="standard"
                secureTextEntry={!isPasswordVisible}
                right={
                  <TextInput.Icon
                    rippleColor="white"
                    color={
                      touched.confirmPassword && errors.confirmPassword
                        ? "darkred"
                        : "black"
                    }
                    // forceTextInputFocus={false}
                    icon={isPasswordVisible ? "eye" : "eye-off"}
                    onPress={togglePasswordVisibility}
                  />
                }
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <TextInput
                activeOutlineColor={COLORS.green2}
                activeUnderlineColor={COLORS.green2}
                onChangeText={handleChange("confirmPassword")}
                handleBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
                label="Confirm Password"
                style={styles.input}
                outlineColor={COLORS.green2}
                variant="standard"
                secureTextEntry={!isPasswordVisible}
                right={
                  <TextInput.Icon
                    rippleColor="white"
                    color={
                      touched.confirmPassword && errors.confirmPassword
                        ? "darkred"
                        : "black"
                    }
                    // forceTextInputFocus={false}
                    icon={isPasswordVisible ? "eye" : "eye-off"}
                    onPress={togglePasswordVisibility}
                  />
                }
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
              <Button
                title="SAVE"
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

export default ResetPass;
