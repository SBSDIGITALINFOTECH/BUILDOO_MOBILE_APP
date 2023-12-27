import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

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
    paddingVertical: SIZES.large,
    width: SIZES.width,
    backgroundColor: COLORS.white,
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
  scrollarea: {
    marginHorizontal: SIZES.medium,
  },
  title: {
    marginTop: SIZES.large,
    fontSize: SIZES.medium + 2,
    fontFamily: 'semibold'
  },
  card: {
    width: "100%",
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.medium,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop: SIZES.medium,
    elevation: 5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.medium,
  },
  textName: {
    fontFamily:'semibold'
  },
  text2: {
    color: "red",
    fontFamily:'semibold'
  },
  text: {
    fontFamily:'regular'
  },
  bottomContainer: {
    flex: 1,
    position: "absolute",
    bottom: SIZES.small,
    paddingBottom: 5,
    paddingTop: 10,
    backgroundColor: "white",
  },

  sec: {
    marginHorizontal: SIZES.medium,
    marginVertical: SIZES.small - 7,
    paddingHorizontal: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ttl: {
    fontSize: SIZES.medium,
    fontFamily: 'semibold',
    color: "gray",
  },
  amm: {
    fontSize: SIZES.medium,
    fontFamily: 'bold'
  },
  bottomsheet: {
    marginHorizontal: SIZES.medium,
  },
  bottomsheetTop: {
    borderBottomWidth: 1,
    borderColor: "black",
    paddingBottom: SIZES.small,
    marginHorizontal: -SIZES.medium,
    display: "flex",
    flexDirection: "row",
  },
  closebtn: {
    marginLeft: SIZES.medium,
    fontWeight: "600",
  },
  heading: {
    fontSize: SIZES.large - 2,
    fontFamily: 'semibold',
    marginLeft: SIZES.medium + 2,
  },
  more: {
    textAlign: "left",
    marginLeft: SIZES.xLarge+8,
    fontSize: SIZES.medium - 1,
    fontFamily: 'semibold',
    color: COLORS.green,
  },
});

export default styles;
