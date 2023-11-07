import { StyleSheet } from "react-native";
import { SIZES, COLORS, SHADOWS } from "../../../constants";

export default styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    paddingVertical: 10,
    marginBottom: 10,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: SIZES.width / 4.5,
    aspectRatio: 1,
    resizeMode: "cover",
  },
  vendor: {
    fontFamily: "regular",
    fontSize: SIZES.small,
  },
  details: {
    alignContent: "center",
    marginStart: 20,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
  },
  price: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
  },
  combine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
  },
  ratingText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: SIZES.width - 80,
    zIndex: 999,
  },
});
