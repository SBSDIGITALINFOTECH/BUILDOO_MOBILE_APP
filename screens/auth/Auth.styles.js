import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  upperRow: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: "center",
    paddingVertical: SIZES.medium,
    width: SIZES.width,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.medium
  },
  subContainer:{
    
  },
  heading:{
    fontFamily:'semibold',
    fontSize: SIZES.xLarge +10,
    marginLeft:SIZES.medium
  },
  headingContainer:{
    marginTop: SIZES.large,
    marginBottom: SIZES.large
  },
  form:{
    flex: 1
  },
  outerForm:{
    textAlign: 'right',
    marginHorizontal: SIZES.medium,
    fontFamily: 'semibold',
    marginTop: SIZES.medium
  },
  input:{
    width: 'auto',
    backgroundColor: COLORS.lightWhite,
    marginHorizontal: SIZES.large,
    marginVertical: SIZES.medium,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    fontFamily: 'regular'
  },
  inputLabel:{
    fontFamily: 'regular',
    fontSize: 300,
  },
  errorText:{
    color:'darkred',
    marginHorizontal: SIZES.xLarge
  }

});
