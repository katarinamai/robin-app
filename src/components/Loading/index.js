import React from 'react'
import { View, Text } from 'react-native'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'

function Loading({ children }) {
  return (
    <ShimmerPlaceholder>
      {children}
    </ShimmerPlaceholder>
  )
}

export default Loading
