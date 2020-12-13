import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import GoBack from "../../components/GoBack";
import BarOnboarding from "../../components/BarOnboarding";
import ButtonPlus from "../../components/ButtonPlus";

import styles from "./styles";

export default function Onboarding3() {
  const navigation = useNavigation();

  function handleNavigateToCashDeposit() {
    navigation.navigate("Depositar");
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.barsContainer}>
          <BarOnboarding />
          <BarOnboarding spaced />
          <BarOnboarding selected />
        </View>

        <GoBack />

        <Text style={styles.titulo}>
          Faça um depósito e comece a usar já sua conta PaySmart.
        </Text>

        <Text style={styles.subTitulo}>
          Você terá acesso ao cartão físico e virtual.
        </Text>

        <ButtonPlus
          label="Depositar Dinheiro"
          onPress={handleNavigateToCashDeposit}
        />

        <View style={{ marginBottom: 32 }} />

        <Button
          label="Pular Etapa"
          onPress={() => {
            navigation.navigate("Principal");
          }}
        />
      </View>
    </ScrollView>
  );
}
