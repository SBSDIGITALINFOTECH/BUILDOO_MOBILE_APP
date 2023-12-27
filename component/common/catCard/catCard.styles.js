import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

export default styles = StyleSheet.create({
  card: {
    width: "50%",
    paddingHorizontal: 10,
    alignItems: "center",
    marginTop: SIZES.medium,
  },
  image: {
    width: "100%",
    aspectRatio: "1",
    borderRadius: 100,
    resizeMode: "cover",
  },

  catName: {
    fontFamily: "semibold",
    fontSize: SIZES.medium + 2,
    marginTop: 10,
  },
});
