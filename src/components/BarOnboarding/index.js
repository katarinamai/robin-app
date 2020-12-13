import React from 'react'
import { View } from 'react-native'

import styles from './styles'

function BarOnboarding({ spaced, selected }) {
  return  (
    <View style={[styles.bars, spaced && styles.barsSpace, selected && styles.selected ]}></View>
  )
}

export default BarOnboarding
