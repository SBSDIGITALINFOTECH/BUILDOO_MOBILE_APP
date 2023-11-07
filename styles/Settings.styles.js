import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: "center",
    paddingVertical: SIZES.medium,
    width: SIZES.width,
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: SIZES.medium,
  },
  subContainer:{
    
  },
  heading:{
    fontFamily:'semibold',
    fontSize: SIZES.xLarge +10,
    marginLeft:SIZES.medium
  },
  subheading:{
    fontFamily:'semibold',
    fontSize:SIZES.medium,
    marginLeft:SIZES.medium
  },
  
});

export default styles;
