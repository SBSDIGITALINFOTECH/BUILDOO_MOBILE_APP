import { View, Text, SafeAreaView, Button, TouchableOpacity } from 'react-native'
import React,{ useRef } from 'react'
import SearchBar from '../component/common/searchbar/SearchBar'
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import styles from '../styles/Search.styles';

const Search = (
  {navigation}
) => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView>
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={22} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <SearchBar />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Cart</Text>
        <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
        <RBSheet
          ref={refRBSheet}
          height={350}
          openDuration={250}
          closeOnDragDown={true}
          closeOnPressMask={true}
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
        </RBSheet>
      </View>
    </SafeAreaView>
  )
}

export default Search