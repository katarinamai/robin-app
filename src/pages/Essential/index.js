import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { BarChart, Grid, YAxis } from "react-native-svg-charts";

import { AppLoading } from "expo";

import Header from "../../components/Header";
import Balance from "../../components/Balance";

import styles from "./styles";

function Essential() {
  const [chartData, setChartData] = useState([{ label: "", value: 0 }]);
  const [config, setCofing] = useState();

  const fill = "#e69233";

  useEffect(() => {
    const data = [
      {
        label: "Alimento",
        value: 500,
      },
      {
        label: "Lazer",
        value: 140,
      },
      {
        label: "Taxas",
        value: 40,
      },
      {
        label: "Transporte",
        value: 75,
      },
    ];

    setChartData(data);
    setCofing(config);
  }, []);

  return (
    <ScrollView>
      <Header title="Essencial" />

      <View style={styles.container}>
        <Balance balance="742,01" cashback="27,57" label="Valor disponível" />

        <View
          style={{ flexDirection: "row", height: 200, paddingVertical: 16 }}
        >
          <YAxis
            data={chartData}
            yAccessor={({ index }) => index}
            contentInset={{ top: 10, bottom: 10 }}
            formatLabel={(_, index) => chartData[1].label}
          />

          <BarChart
            horizontal
            style={{ height: 160, width: "100%" }}
            yAccessor={({ item }) => item.value}
            data={chartData}
            spacingInner={0.3}
            svg={{ fill, fillOpacity: 0.7 }}
            contentInset={{ top: 30, bottom: 30 }}
          >
            <Grid direction={Grid.Direction.VERTICAL} />
          </BarChart>
        </View>
      </View>
    </ScrollView>
  );
}

export default Essential;
