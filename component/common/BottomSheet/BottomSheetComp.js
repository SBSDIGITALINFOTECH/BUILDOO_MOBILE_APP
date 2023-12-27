import React, { useCallback, useRef, useMemo, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

const BottomSheetComp = ({
  Component,
  handleSnapPress,
  sheetRef,
  handleSheetChange,
  handleClosePress,
  onClose,
  SnapPoints,
}) => {
  // hooks
  // const sheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => [...SnapPoints], []);

  // callbacks

  // const handleSnapPress = useCallback((index) => {
  //   sheetRef.current?.snapToIndex(index);
  // }, []);

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

  const handleClose = () => {
    if (onClose) {
      onClose(); // Call the onClose callback when the bottom sheet is closed
    }
  };
  // render
  return (
    // {/* <Button title="Snap To 100%" onPress={() => handleSnapPress(1)} />
    // <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
    // <Button title="Close" onPress={() => handleClosePress()} /> */}
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      onChange={handleSheetChange}
      onClose={handleClose}
    >
      <BottomSheetScrollView>{Component}</BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
});

export default BottomSheetComp;
