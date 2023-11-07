import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({

upperRow: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: "center",
    // position: "absolute",
    paddingVertical: SIZES.medium,
    width: SIZES.width,
    // backgroundColor: COLORS.lightWhite,
    paddingHorizontal: SIZES.medium,
    // shadowOffset: { width: 0, height: 2 },
    // shadowColor: "black",
    // shadowOpacity: 0.2,
    // elevation: 10,
  },

})

export default styles;