import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native'

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import ButtonPlus from "../../components/ButtonPlus";
import Chart from "../../components/Chart";
import Loading from "../../components/Loading";

import styles from "./styles";

import api from '../../services/api'

function Goal() {
  const params = useRoute().params;
  const navigation = useNavigation()
  const [chartData, setChartData] = useState([]);
  const [found, setFound] = useState([ { amount: 0, category: '' }])

  useEffect(() => {
    api.get(`/transactions/founds/${params.user_id}`).then(response => {
      setFound(response.data.map(data => ({ amount:data.amount/100, category:data.category})))
    })
  }, [params])

  function handleNavigateToNewGoal() {
    navigation.navigate("CadastrarObjetivo")
  }

  useEffect(() => {
    let data = [
      {
        label: "Dívidas",
        value: 450,
      },
      {
        label: "Fundo emergencial",
        value: 240,
      },
      {
        label: "Investimento 1",
        value: 175,
      },
      {
        label: "Previdência Privada",
        value: 97,
      },
    ];

    data = data.map(item => {
      item.label = item.label.slice(0, 12)

      if(item.label.length > 11) {
        item.label += '...'
      }

      return item
    })

    setChartData([ { label: "", value: 0 }, ...data, ]);
  }, []);

  if(found.length < 2) {
    return <Loading />
  }

  return (
    <ScrollView>
      <Header title="Objetivos" />

      <View style={styles.container}>
        <Balance balance={found[1].amount} label="Valor total" />

        <Chart chartData={chartData} />

        <ButtonPlus label="Adicionar objetivo" onPress={handleNavigateToNewGoal} />
      </View>
    </ScrollView>
  );
}

export default Goal;
