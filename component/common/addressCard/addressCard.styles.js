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
  details: {
    width: "100%",
    padding: SIZES.medium,
  },
  row1: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  catName: {
    fontFamily: "semibold",
  },
  edit: {
    fontFamily: "semibold",
    color: "black",
  },
  row2: {
    marginTop: SIZES.xSmall,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  catName2: {
    fontFamily: "regular",
  },
  catName3: {
    position: "absolute",
    fontFamily: "regular",
    bottom: SIZES.medium,
    right: SIZES.medium,
    color: "green",
  },
  catName4: {
    position: "absolute",
    fontFamily: "regular",
    bottom: SIZES.medium,
    right: SIZES.medium,
  },
});
