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
  scrollarea:{
    marginHorizontal: SIZES.medium
  },
  title:{
    marginTop: SIZES.large,
    fontSize:SIZES.medium+2,
    fontWeight: '500'
  },
  card:{
    width: '100%',
    paddingHorizontal: SIZES.large,
    paddingVertical:SIZES.medium,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop: SIZES.medium,
    elevation:5,
  },
  row:{
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.medium
  },
  textName:{
    fontWeight: '400',
  },
  text2:{
    color: "red"
  },
  text:{

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
    marginVertical:SIZES.small-7,
    paddingHorizontal: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ttl: {
    fontSize: SIZES.medium,
    color: 'gray'
  },
  amm: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  bottomsheet:{
    marginHorizontal: SIZES.medium
  }
});

export default styles;
