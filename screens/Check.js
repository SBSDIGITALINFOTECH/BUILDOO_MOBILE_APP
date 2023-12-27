import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Check = () => {
  // hooks
  const sheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        BackdropPressBehavior="close"
        // disappearsOnIndex={2}
        appearsOnIndex={1}
      />
    ),
    []
  );
  //   const data = useMemo(
  //     () =>
  //       Array(50)
  //         .fill(0)
  //         .map((_, index) => `index-${index}`),
  //     []
  //   );
  //   const renderItem = useCallback(
  //     (item) => (
  //       <View key={item} style={styles.itemContainer}>
  //         <Text>{item}</Text>
  //       </View>
  //     ),
  //     []
  //   );
  // render
  return (
    <GestureHandlerRootView style={styles.container}>
      <Button title="Snap To 100%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} />
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}
        index={1}
        onChange={handleSheetChange}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
          <Text>Hii</Text>
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});

export default Check;
