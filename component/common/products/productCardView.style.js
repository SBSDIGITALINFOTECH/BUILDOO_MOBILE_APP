import { FlatList, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 300,
    marginEnd: 2,
    borderRadius: SIZES.large - 10,

    backgroundColor: COLORS.white,
  },
  imageContainer: {
    width: 170,
    marginLeft: SIZES.small / 2,
    marginRight: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.small,
  },
  category: {
    fontFamily: "regular",
    fontSize: SIZES.small + 1,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.medium - 2,
  },
  price: {
    fontFamily: "semibold",
    fontSize: SIZES.medium + 2,
  },
  sprice: {
    color: "red",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontSize: SIZES.medium - 2,
  },
  reviewContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  favourite: {
    position: "absolute",
    top: -8,
    right: 5,
    padding: 8,
  },
  circle: {
    width: "auto",
    height: "auto",
    padding: 7,
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (x, y)
    shadowOpacity: 0.5, // Shadow opacity (0 to 1)
    shadowRadius: 4, // Shadow radius
    elevation: 4, // Elevation (for Android)
  },
});

export default styles;
