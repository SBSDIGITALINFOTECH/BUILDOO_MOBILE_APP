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
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../../constants";
import { Formik } from "formik";
import styles from "./Auth.styles";
import { TextInput } from "react-native-paper";
import { Button } from "@rneui/themed";
import { loginSchema } from "../../schema/AuthSchema";
import { StatusBar } from "react-native";
import { loginApi } from "../../config/API";
import { ToastAndroid } from "react-native";
import { useContext } from "react";
import { TokenContext } from "../../store/TokenContext";
import Loader from "../../component/common/loader/Loader";
import { AntDesign } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const { token, addToken, removeToken, loader, openLoader, closeLoader } =
    useContext(TokenContext);
  const initialValues = {
    email: "",
    password: "",
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (values) => {
    openLoader();
    loginApi({
      emailId: values.email,
      password: values.password,
    })
      .then((res) => {
        if (res.data.success) {
          addToken(res.data.token);
          ToastAndroid.show("Succssesfully login !", ToastAndroid.TOP);
          closeLoader();
          navigation.navigate("Home");
        } else {
          ToastAndroid.show(res.data.message, ToastAndroid.TOP);
        }
      })
      .catch((err) => {})
      .finally(() => {
        closeLoader();
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {loader ? (
        <Loader />
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.upperRow}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="left" size={22} color={COLORS.black} />
            </TouchableOpacity>
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Login</Text>
          </View>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
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
                  autoComplete="email"
                  activeOutlineColor={COLORS.green2}
                  activeUnderlineColor={COLORS.green2}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  label="Email"
                  style={styles.input}
                  onBlur={handleBlur("email")}
                  underlineColor={COLORS.green2}
                  outlineColor={COLORS.green2}
                  variant="standard"
                  error={touched.email && errors.email}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <TextInput
                  activeOutlineColor={COLORS.green2}
                  activeUnderlineColor={COLORS.green2}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  label="Password"
                  style={styles.input}
                  error={touched.password && errors.password}
                  underlineColor={COLORS.green2}
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
                <Text
                  style={styles.outerForm}
                  onPress={() => navigation.navigate("ForgettPassword")}
                >
                  Forget your password?
                </Text>
                <Button
                  title="LOGIN"
                  titleStyle={{ fontFamily: "semibold" }}
                  buttonStyle={{
                    backgroundColor: COLORS.green2,
                    borderColor: COLORS.green2,
                    borderWidth: 2,
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
                <Button
                  title="REGISTER"
                  titleStyle={{ fontFamily: "semibold", color: COLORS.green2 }}
                  buttonStyle={{
                    backgroundColor: COLORS.white,
                    borderColor: COLORS.green2,
                    borderWidth: 2,
                    paddingVertical: SIZES.small,
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: SIZES.width,
                    paddingHorizontal: SIZES.medium,
                    marginVertical: 10,
                    marginTop: SIZES.small,
                  }}
                  onPress={() => navigation.navigate("Signup")}
                />
              </View>
            )}
          </Formik>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default Login;
