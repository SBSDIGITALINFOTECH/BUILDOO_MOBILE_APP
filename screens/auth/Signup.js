import {
  FlatList,
  Image,
  KeyboardAvoidingView,
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
import { signupSchema } from "../../schema/AuthSchema";

const Signup = ({ navigation }) => {
  const initialValues = {
    email: "",
    fullName: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (values) => {
    // console.log(values.email, values.password);
    // navigation.navigate("orderSuccessfull")
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
          <Text style={styles.heading}>Sign up</Text>
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
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
            <KeyboardAvoidingView
              keyboardVerticalOffset={100}
              style={{ flex: 1, backgroundColor: "transparent" }}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <ScrollView style={styles.form}>
                <TextInput
                  // contentStyle={{ fontFamily: "semibold" }}
                  autoComplete="name"
                  labelStyle={{ fontSize: 20, color: "blue" }}
                  activeOutlineColor={COLORS.green2}
                  activeUnderlineColor={COLORS.green2}
                  onChangeText={handleChange("fullName")}
                  handleBlur={handleBlur("fullName")}
                  value={values.fullName}
                  error={touched.fullName && errors.fullName}
                  label="Name"
                  style={styles.input}
                  outlineColor={COLORS.green2}
                  variant="standard"
                />
                {touched.fullName && errors.fullName && (
                  <Text style={styles.errorText}>{errors.fullName}</Text>
                )}
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
                <TextInput
                  activeOutlineColor={COLORS.green2}
                  activeUnderlineColor={COLORS.green2}
                  onChangeText={handleChange("phoneNo")}
                  handleBlur={handleBlur("phoneNo")}
                  value={values.phoneNo}
                  error={touched.phoneNo && errors.phoneNo}
                  label="Phone"
                  style={styles.input}
                  outlineColor={COLORS.green2}
                  keyboardType="phone-pad"
                />
                {touched.phoneNo && errors.phoneNo && (
                  <Text style={styles.errorText}>{errors.phoneNo}</Text>
                )}
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
                      // forceTextInputFocus={false}
                      color={
                        touched.password && errors.password
                          ? "darkred"
                          : "black"
                      }
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
                      // forceTextInputFocus={false}
                      color={
                        touched.confirmPassword && errors.confirmPassword
                          ? "darkred"
                          : "black"
                      }
                      icon={isPasswordVisible ? "eye" : "eye-off"}
                      onPress={togglePasswordVisibility}
                    />
                  }
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
                <Text style={styles.outerForm} onPress={()=> navigation.navigate('Login')}>Already have an account?</Text>
                <Button
                  title="SIGN UP"
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
              </ScrollView>
            </KeyboardAvoidingView>
          )}
        </Formik>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Signup;
