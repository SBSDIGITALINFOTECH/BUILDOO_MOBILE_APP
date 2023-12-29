import { Platform, SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import styles from "../styles/Category.styles";
import CatCard from "../component/common/catCard/CatCard";
import { StatusBar } from "react-native";
import { fetchCategory } from "../config/API";
import { useEffect } from "react";
import Loader from "../component/common/loader/Loader";
import { TokenContext } from "../store/TokenContext";

const Category = ({ navigation }) => {
  const { loader, openLoader, closeLoader } = useContext(TokenContext);
  const [SearchResult, setSearchResult] = useState([]);

  const onLoad = () => {
    openLoader();
    fetchCategory()
      .then((res) => {
        if (res.data.success) {
          setSearchResult(res.data.data);
          closeLoader();
        }
      })
      .catch((err) => {
        closeLoader();
      });
  };
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <SafeAreaView>
      {loader ? (
        <Loader />
      ) : (
        <View
          style={{
            ...styles.container,
            height: Platform.OS === "ios" ? "100%" : "100%",
          }}
        >
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
            <Text style={styles.heading}>Categories</Text>
          </View>
          <ScrollView>
            <View
              style={{
                flex: 1,
                width: "100%",
                paddingHorizontal: SIZES.medium,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {SearchResult.map((item, i) => (
                <CatCard item={item} key={i} />
              ))}
            </View>
          </ScrollView>
          {/* <FlatList
          refreshing={false}
          onRefresh={() => {}}
          showsVerticalScrollIndicator={false}
          data={SearchResult}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CatCard item={item} />}
          style={[
            {
              marginHorizontal: 20,
              marginTop: SIZES.large,
            },
          ]}
        /> */}
        </View>
      )}
      <StatusBar
        backgroundColor={COLORS.lightWhite}
        barStyle="dark-content"
        style={COLORS.black}
      />
    </SafeAreaView>
  );
};

export default Category;
