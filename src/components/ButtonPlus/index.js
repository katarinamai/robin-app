import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

function ButtonPlus({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Feather style={styles.buttonIcon} name="plus" />
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPlus
