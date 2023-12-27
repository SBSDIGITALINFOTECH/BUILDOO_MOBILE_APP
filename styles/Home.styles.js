import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

export default styles = StyleSheet.create({
  container: {
    height: "auto",
  },
  logo: {
    marginTop: 20,
    left: 10,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.small,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.green,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    paddingHorizontal: SIZES.small,
  },
});
