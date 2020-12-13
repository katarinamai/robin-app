import React from 'react'
import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

function Header({ title }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Feather style={styles.icons} name="menu" />

        <Text style={styles.title}>{title}</Text>
      </View>

      <View  style={styles.content}>
        <Feather style={styles.icons} name="bell" />
        <Feather style={styles.icons} name="share-2" />
        <Feather style={styles.icons} name="search" />
      </View>
    </View>
  )
}

export default Header
