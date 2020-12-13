import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

function BalanceCard({ title, percent, balance, onPress }) {
  function handleFormatCash(cash) {
    return cash.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
  }

  function handleCalcCashBack(value) {
    if(typeof value == 'string') {
      value = value.replace('-', '.')
    }

    const cash = Number(value)

    const cashback = cash * 0.05

    const formated = handleFormatCash(cashback)

    return formated
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.percent}>{percent}%</Text>
      </View>

      <Text style={styles.balance}>{handleFormatCash(balance)}</Text>
      <Text style={styles.cashback}>Cashback: {handleCalcCashBack(balance)}</Text>
    </TouchableOpacity>
  )
}

export default BalanceCard
