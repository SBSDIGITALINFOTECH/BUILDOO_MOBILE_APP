import { Platform, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: SIZES.medium,
    width: SIZES.width,
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 20,
  },
  subContainer: {},
  heading: {
    fontFamily: "semibold",
    fontSize: SIZES.xLarge + 10,
    marginLeft: SIZES.medium,
  },
  card: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    marginBottom: SIZES.small,
    borderRadius: SIZES.small,
    paddingVertical: SIZES.small,
    paddingRight: SIZES.large,
  },
  subcard1: {
    width: "30%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  subcard2: {
    width: "70%",
    paddingVertical: SIZES.small,
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row1t1: {
    fontFamily: "semibold",
  },
  row1t2: {
    fontFamily: "regular",
  },
  row2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: SIZES.small,
  },
  row2t1: {
    fontFamily: "regular",
    width: "50%",
  },
  row2t2: {
    fontFamily: "regular",
    color: "green",
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row3t1: {
    fontFamily: "regular",
  },
  row3t2: {
    fontFamily: "regular",
  },
  bold: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: SIZES.medium,
    borderBottomWidth: 0.2,
    borderColor: "#9b9b9b",
    paddingHorizontal: SIZES.medium,
    alignItems: "center",
  },
  title: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
  },
});

export default styles;
