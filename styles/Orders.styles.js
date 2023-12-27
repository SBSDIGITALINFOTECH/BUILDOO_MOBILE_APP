import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // position: "absolute",
    paddingVertical: SIZES.medium,
    width: SIZES.width,
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: SIZES.medium,
    // shadowOffset: { width: 0, height: 2 },
    // shadowColor: "black",
    // shadowOpacity: 0.2,
    // elevation: 10,
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
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    maxHeight: 140,
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
