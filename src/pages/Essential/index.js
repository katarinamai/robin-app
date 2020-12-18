import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import ButtonPlus from "../../components/ButtonPlus";
import Chart from "../../components/Chart";
import Loading from "../../components/Loading";

import styles from "./styles";

import api from '../../services/api'

function Essential() {
  const params = useRoute().params;
  const [chartData, setChartData] = useState([]);
  const [found, setFound] = useState([ { amount: 0, category: '' }])

  useEffect(() => {
    api.get(`/transactions/founds/${params.user_id}`).then(response => {
      setFound(response.data.map(data => ({ amount:data.amount/100, category:data.category})))
    })
  }, [params])

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

    setChartData([ { label: "", value: 0 }, ...data, ]);
  }, []);

  if(found.length < 2) {
    return <Loading />
  }

  return (
    <ScrollView>
      <Header title="Essencial" />

      <View style={styles.container}>
        <Balance balance={found[0].amount} label="Valor disponível" />

        <Chart chartData={chartData} />

        <ButtonPlus label="Adicionar Categoria" />
      </View>
    </ScrollView>
  );
}

export default Essential;
