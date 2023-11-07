import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants'
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="search" style={styles.searchIcon} size={24} color={COLORS.black} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput  
          style={styles.searchInput}
          value=''
          onPressIn={()=>{}}
          placeholder='What are you looking for'
          />
        </View>
      </View>
  )
}

export default SearchBar


const styles = StyleSheet.create({
  searchContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.small,
    height: 50,
},
searchIcon:{
    marginHorizontal: 10,
    color: COLORS.green,
},
searchWrapper:{
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small
},
searchInput:{
    fontFamily:'regular',
    width:'100%',
    height: '100',
    paddingHorizontal:SIZES.small
}
})