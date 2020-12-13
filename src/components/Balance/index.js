import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

function Balance({ balance, label, cashback }) {
  return (
    <View style={styles.container}>
      <Text style={styles.balance}>R$ {balance}</Text>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.cashback}>Cashback: R$ {cashback}</Text>
    </View>
  )
}

export default Balance
