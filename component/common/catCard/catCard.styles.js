import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

export default styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    justifyContent: "space-between",
    marginBottom: 10,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "40%",
    maxHeight: 120,
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    alignContent: "center",
    marginStart: 20,
  },
  catName: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    textTransform: 'capitalize'
  },
});
