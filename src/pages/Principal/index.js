import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import BalanceCard from "../../components/BalanceCard";
import Loading from "../../components/Loading";

import styles from "./styles";

import api from "../../services/api";

export default function Principal() {
  const navigation = useNavigation();
  const [user_id, setUser_id] = useState("");
  const [found, setFound] = useState([ { amount: 0, category: '' }])

  useEffect(() => {
    AsyncStorage.getItem("user_id").then((response) => {
      setUser_id(response);
    });
  }, []);

  useEffect(() => {
    api.get(`/transactions/founds/${user_id}`).then(response => {
      setFound(response.data)
    })
  }, [user_id])

  function handleNaviteToVirtualCard() {
    navigation.navigate("VirtualCard", { user_id });
  }

  function handleNavigateToEssentialDetail() {
    navigation.navigate("Essential", { user_id })
  }

  function handleNavigateToGoalDetail() {
    navigation.navigate("Goal", { user_id })
  }

  if(found.length < 2) {
    return <Loading />
  }

  return (
    <ScrollView>
      <Header title="Início" />

      <View style={styles.content}>
        <Balance balance={found[0].amount} label="Saldo Disponível" />

        <TouchableOpacity
          style={styles.creditCard}
          onPress={handleNaviteToVirtualCard}
        >
          <Feather style={styles.icon} name="credit-card" />
          <Text style={styles.creditText}>Cartão Virtual</Text>
        </TouchableOpacity>

        <BalanceCard
          title="Essencial"
          percent="55"
          balance={found[0].amount}
          onPress={handleNavigateToEssentialDetail}
        />

        <BalanceCard
          title="Objetivos"
          percent="35"
          balance={found[1].amount}
          onPress={handleNavigateToGoalDetail}
        />

        <BalanceCard
          title="Gasto Livre"
          percent="10"
          balance={found[2].amount}
          onPress={handleNavigateToEssentialDetail}
        />
      </View>
    </ScrollView>
  );
}
