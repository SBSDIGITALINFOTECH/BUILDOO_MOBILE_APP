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
  headingRow: {
    flexDirection: "row",
    marginLeft: SIZES.small,
    marginTop: SIZES.medium,
    alignItems: "center",
  },
  headingRowCol: {
    marginLeft: SIZES.medium,
  },
  headingText: {
    fontFamily: "semibold",
    fontSize: SIZES.medium + 2,
  },
  headingText2: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    verticalAlign: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: SIZES.medium,
    borderBottomWidth: 0.5,
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
