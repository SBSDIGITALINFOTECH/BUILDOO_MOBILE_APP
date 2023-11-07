import React from "react";
import { COLORS } from "../../../constants";
import { SliderBox } from "react-native-image-slider-box";
import { StyleSheet, View } from "react-native";

const Carousel = () => {
  const slides = [
    "https://buildoo.co.in/files/crouselImage/XLsPejXy6UmGraOMzYaK6g.jpeg",
    "https://buildoo.co.in/files/crouselImage/bqz3HrWYPkeHt8WSOfd1Yg.jpeg",
    "https://buildoo.co.in/files/crouselImage/opo2MdnHIUOTRSiEVhE8WA.jpeg",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        disableOnPress={false}
        resizeMode='contain'
        ImageComponentStyle={{
          width: "95%",
          borderRadius: 15,
          height: 150,
          marginTop: 15,
        }}
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
