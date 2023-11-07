import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    flexDirection: "row",
    // justifyContent:'space-between',
    alignItems: "center",
    // position: "absolute",
    paddingVertical: SIZES.medium,
    width: SIZES.width,
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 10,
  },
  headerText: {
    position: "absolute",
    left: SIZES.width / 2 - 50,
    fontFamily: "semibold",
    alignItems: "center",
    textAlign: "center",
    fontSize: SIZES.large,
  },
  addIcon: {
    position: "absolute",
    right: SIZES.medium,
  },
});

export default styles;
