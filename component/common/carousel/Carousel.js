import React, { useEffect } from "react";
import { COLORS, SIZES } from "../../../constants";
import { SliderBox } from "react-native-image-slider-box";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Image } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchCrousel } from "../../../config/API";

const Carousel = () => {
  const [loading, setLoading] = useState(true);
  const [slides, setSlide] = useState([]);
  const onLoad = async () => {
    const srr = await AsyncStorage.getItem("guestId");

    fetchCrousel(srr).then((res) => {
      if (res.data.success) {
        var slide = [];
        res.data.data.map((item) => {
          slide.push(item.image);
        });
        setSlide(slide);
      }
    });
  };
  useEffect(() => {
    onLoad();
  }, []);
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        dotStyle={{ width: 0, height: 0, margin: 0 }}
        inactiveDotOpacity={0}
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        disableOnPress={false}
        resizeMode="contain"
        ImageComponent={({ source }) => (
          <View style={{ flex: 1, paddingHorizontal: SIZES.small }}>
            <Image
              source={source}
              style={{
                justifyContent: "center",
                width: "100%",
                aspectRatio: 16 / 6,
                borderRadius: 10,
                flex: 1,
              }}
              resizeMode="contain"
              onLoad={() => setLoading(false)}
            />
            {loading && (
              <View
                style={{
                  ...StyleSheet.absoluteFill,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ActivityIndicator size="small" color={COLORS.primary} />
              </View>
            )}
          </View>
        )}
        LoaderComponent={({}) => <View style={{ flex: 1 }}></View>}
        circleLoop
        autoplay
        autoplayInterval={2000}
      />
    </View>
  );
};
export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
