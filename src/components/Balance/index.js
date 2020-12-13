import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

function Balance({ balance, label }) {
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
    <View style={styles.container}>
      <Text style={styles.balance}>{handleFormatCash(balance)}</Text>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.cashback}>Cashback: {handleCalcCashBack(balance)}</Text>
    </View>
  )
}

export default Balance
