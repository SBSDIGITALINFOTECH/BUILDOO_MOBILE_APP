import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    // position: "absolute",
    paddingVertical: SIZES.medium,
    width: SIZES.width,
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 20,
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

  rating: {
    // top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // marginHorizontal: SIZES.large
  },
  ratingText: {
    color: COLORS.black,
    fontFamily: "medium",
    alignItems: "center",
    marginHorizontal: SIZES.medium,
  },
  increIcon: {
    padding: 5,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    elevation: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  bottomContainer: {
    flex: 1,
    position: "absolute",
    bottom: SIZES.xxLarge + 15,
    paddingBottom: 5,
    paddingTop: 10,
    backgroundColor: "white",
  },

  sec: {
    marginHorizontal: SIZES.medium,
    paddingHorizontal: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ttl: {
    fontSize: SIZES.medium,
  },
  amm: {
    fontSize: SIZES.large,
    fontWeight: "bold",
  },
});

export default styles;
