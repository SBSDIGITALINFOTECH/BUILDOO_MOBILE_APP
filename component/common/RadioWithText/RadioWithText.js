import { View, Text } from "react-native";
import React, { useState } from "react";
import { CheckBox, Icon } from "@rneui/themed";
import { SIZES } from "../../../constants";

const RadioWithText = ({ title, index, selectedIndex, setIndex }) => {
  return (
    <View style={{ marginHorizontal: -10 }}>
      <CheckBox
        title={title}
        titleProps={{
          style: {
            fontFamily: "regular",
          },
        }}
        containerStyle={{
          marginVertical: 0,
          marginHorizontal: 0,
          paddingHorizontal: 0,
          paddingRight: 35,
        }}
        checkedIcon={
          <Icon
            name="radio-button-checked"
            type="material"
            color="green"
            size={25}
            iconStyle={{ marginRight: 10 }}
          />
        }
        uncheckedIcon={
          <Icon
            name="radio-button-unchecked"
            type="material"
            color="grey"
            size={25}
            iconStyle={{ marginRight: 10 }}
          />
        }
        checked={selectedIndex === index}
        onPress={() => setIndex(index)}
      />
    </View>
  );
};

export default RadioWithText;
