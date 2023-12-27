import { View, Text, FlatList } from "react-native";
import React from "react";
import { SIZES } from "../../../constants";
import ProductCardView from "./ProductCardView";

const ProductRow = ({ style,products }) => {
  return (
    <View style={{ ...style, marginTop: SIZES.medium, marginLeft: 12 }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
