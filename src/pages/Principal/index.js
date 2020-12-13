import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import BalanceCard from "../../components/BalanceCard";

import styles from "./styles";

import api from "../../services/api";

export default function Principal({ navigation: { goBack } }) {
  const navigation = useNavigation();
  const [user_id, setUser_id] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user_id").then((response) => {
      setUser_id(response);
    });
  }, []);

  function handleNaviteToVirtualCard() {
    navigation.navigate("VirtualCard", { user_id });
  }

  function handleNavigateToEssentialDetail() {
    navigation.navigate("Essential")
  }

  function handleNavigateToGoalDetail() {
    navigation.navigate("Goal")
  }

  return (
    <ScrollView>
      <Header title="Início" />

      <View style={styles.content}>
        <Balance balance="1.020,03" cashback="00,00" label="Saldo Disponível" />

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
          balance="742,01"
          cashback="27,57"
          onPress={handleNavigateToEssentialDetail}
        />

        <BalanceCard
          title="Objetivos"
          percent="35"
          balance="00,00"
          cashback="00,00"
          onPress={handleNavigateToGoalDetail}
        />

        <BalanceCard
          title="Gasto Livre"
          percent="10"
          balance="278,02"
          cashback="13,10"
          onPress={handleNavigateToEssentialDetail}
        />
      </View>
    </ScrollView>
  );
}
