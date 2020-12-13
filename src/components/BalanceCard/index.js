import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

function BalanceCard({ title, percent, balance, cashback, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.percent}>{percent}%</Text>
      </View>

      <Text style={styles.balance}>R$ {balance}</Text>
      <Text style={styles.cashback}>Cashback: R$ {cashback}</Text>
    </TouchableOpacity>
  )
}

export default BalanceCard
