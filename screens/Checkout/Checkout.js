import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React, { useRef,useState } from "react";
import { SafeAreaView } from "react-native";
import styles from "../../styles/checkout/Checkout.styles";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { Button, CheckBox, Icon } from "@rneui/themed";
import RBSheet from "react-native-raw-bottom-sheet";

const Checkout = ({ navigation }) => {
    const [check4, setCheck4] = useState(false)
    const refRBSheet = useRef();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={22} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Checkout</Text>
        {/* <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.addIcon}
      >
        <AntDesign name="plus" size={22} />
      </TouchableOpacity> */}
      </View>
      <View style={styles.scrollarea}>
        <Text style={styles.title}>Shipping address</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.textName}>Jane Doe</Text>
            <Text style={styles.text2} onPress={() => refRBSheet.current.open()}>Change</Text>
          </View>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
            3 Newbridge Court Chino Hills, CA 91709, United States
          </Text>
        </View>
        <Text style={styles.title}>Payment Method</Text>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.text}>Cash On Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.text}>Online Mode</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.sec}>
          <Text style={styles.ttl}>Order:</Text>
          <Text style={styles.amm}>₹ 112.00</Text>
        </View>
        <View style={styles.sec}>
          <Text style={styles.ttl}>Delivery:</Text>
          <Text style={styles.amm}>₹ 15.00</Text>
        </View>
        <View style={styles.sec}>
          <Text style={styles.ttl}>Total amount:</Text>
          <Text style={styles.amm}>₹ 127.00</Text>
        </View>
        <Button
          title="CHECK OUT"
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "green",
            borderColor: "transparent",
            borderWidth: 0,
            paddingVertical: SIZES.small,
            borderRadius: 30,
          }}
          containerStyle={{
            width: SIZES.width,
            paddingHorizontal: SIZES.medium,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate("checkout")}
        />
      </View>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
        style="black"
      />
      <RBSheet
          ref={refRBSheet}
          height={400}
          openDuration={250}
          closeOnDragDown={true}
          closeOnPressMask={true}
        //   minClosingHeight={100}
          customStyles={{
            // wrapper: {
            //   backgroundColor: "transparent"
            // },
            draggableIcon: {
              backgroundColor: "#000"
            },
            container:{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }
          }}
        >
            <View style={styles.bottomsheet}>
            <Text>Select Delivery Address</Text>
            <CheckBox
      center
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
      checked={check4}
      onPress={() => setCheck4(!check4)}
    />
            </View>
        </RBSheet>
    </SafeAreaView>
  );
};

export default Checkout;
