import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './Headings.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../../constants'

const Headings = (props) => {
  return (
    <View style={{...styles.container, ...props.style}}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
            <TouchableWithoutFeedback >
                <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
            </TouchableWithoutFeedback >
      </View>
    </View>
  )
}

export default Headings