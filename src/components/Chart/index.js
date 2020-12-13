import React from "react";
import { View } from 'react-native'
import { BarChart, YAxis } from "react-native-svg-charts";

import styles from './styles'

function Chart({ chartData }) {
  const fill = "#e69233";

  return (
    <View style={styles.chartContainer}>
      <YAxis
        data={chartData}
        style={{ height: 180, marginRight: 10 }}
        yAccessor={({ index }) => index}
        svg={{ fill: "grey" }}
        contentInset={{ top: 32, bottom: 15 }}
        numberOfTicks={chartData.length}
        formatLabel={(_, idx) => {
          const index = chartData.length - idx;

          if (!chartData[index]) return "";

          return chartData[index].label;
        }}
      />

      <BarChart
        horizontal
        style={{ height: 160, width: "60%" }}
        yAccessor={({ item }) => item.value}
        data={chartData}
        spacingInner={0.17}
        svg={{ fill, fillOpacity: 0.7 }}
        contentInset={{ top: -20, bottom: 10 }}
      />
    </View>
  );
}

export default Chart;
