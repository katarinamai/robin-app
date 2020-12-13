import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

function GoBack({ pageTitle }) {
  const navigation = useNavigation();

  function handleNavigationToBackPage() {
    navigation.goBack();
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigationToBackPage}>
      <Feather name="arrow-left" style={styles.icon} />
      <Text style={styles.pageTitle}>{pageTitle}</Text>
    </TouchableOpacity>
  )
}

export default GoBack
