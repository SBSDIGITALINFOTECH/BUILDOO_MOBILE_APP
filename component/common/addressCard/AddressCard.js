import { Text, View } from "react-native";
import React from "react";
import styles from "./addressCard.styles";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const AddressesCard = ({ item }) => {
  const navigation = useNavigation();
  const activeStyle = {
    borderColor: item.selected ? "green" : "white",
    borderWidth: item.selected ? 1 : 0,
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("ProductDetails")}
    >
      <View style={{ ...styles.card, ...activeStyle }}>
        <View style={styles.details}>
          <View style={styles.row1}>
            <Text style={styles.catName}>Jhon carter</Text>
            <Text style={styles.edit}>Edit</Text>
          </View>
          <View style={styles.row2}>
            <Text style={styles.catName2}>
              22 & 23, Apollo Market, Prakash Industrial Estate, Sahibabad,
              Ghaziabad, Uttar Pradesh 201005
            </Text>
          </View>
          {item.selected && <Text style={styles.catName3}>Active</Text>}
          {!item.selected && (
            <MaterialCommunityIcons
              style={styles.catName4}
              name="delete-circle"
              size={30}
              color="red"
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AddressesCard;
