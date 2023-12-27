import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  BackHandler,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SafeAreaView } from "react-native";
import styles from "../../styles/checkout/Checkout.styles";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { Button } from "@rneui/themed";
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheetComp from "../../component/common/BottomSheet/BottomSheetComp";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RadioWithText from "../../component/common/RadioWithText/RadioWithText";
import { useNavigation } from "@react-navigation/native";

const Checkout = ({ navigation }) => {
  const [selectedIndex, setIndex] = useState(0);
  const sheetRef = useRef(null);
  const handleSnapPress = useCallback((index) => {
    setIsBottomSheetOpen(true);
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleSheetChange = useCallback((index) => {
    // console.log("handleSheetChange", index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
    setIsBottomSheetOpen(false);
  }, []);

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Use the navigation hook to access the navigate function
  const { navigate, goBack } = useNavigation();

  // Handle back button press
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (isBottomSheetOpen) {
          sheetRef.current?.close();
          setIsBottomSheetOpen(false);
          return true; // Prevent the default back button behavior
        }
        return false; // Allow navigation back
      }
    );

    return () => backHandler.remove();
  }, [isBottomSheetOpen]);

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.upperRow}>
          <TouchableOpacity
            onPress={() => {
              goBack();
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
              <Text style={styles.text2} onPress={() => handleSnapPress(1)}>
                Change
              </Text>
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
            titleStyle={{ fontFamily: "semibold" }}
            buttonStyle={{
              backgroundColor: COLORS.green2,
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
            onPress={() => navigation.navigate("orderSuccessfull")}
          />
        </View>
        <StatusBar
          backgroundColor={COLORS.white}
          barStyle="dark-content"
          style={COLORS.black}
        />
        <BottomSheetComp
          onClose={() => setIsBottomSheetOpen(false)}
          handleSheetChange={handleSheetChange}
          handleClosePress={handleClosePress}
          sheetRef={sheetRef}
          handleSnapPress={handleSnapPress}
          SnapPoints={["1", "40%", "100%"]}
          Component={
            <View style={styles.bottomsheet}>
              <View style={styles.bottomsheetTop}>
                <TouchableOpacity onPress={handleClosePress}>
                  <AntDesign
                    name="close"
                    size={24}
                    color="black"
                    style={styles.closebtn}
                  />
                </TouchableOpacity>
                <Text style={styles.heading}>Select Delivery Address</Text>
              </View>
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <RadioWithText
                    key={index}
                    index={index}
                    selectedIndex={selectedIndex}
                    setIndex={setIndex}
                    title={
                      "3 Newbridge Court Chino Hills, CA 91709, United States"
                    }
                  />
                ))}
              <Text style={styles.more} onPress={() => handleSnapPress(2)}>
                +11 More addresses
              </Text>
            </View>
          }
        />
        {/* <RBSheet
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
            
        </RBSheet> */}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Checkout;
