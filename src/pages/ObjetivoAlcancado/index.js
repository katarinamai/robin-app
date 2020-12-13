import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import GoBack from "../../components/GoBack";
import ButtonPlus from "../../components/ButtonPlus";

import Img from "../../assets/undraw_stepping_up_g6oo.png";

import api from "../../services/api";

import styles from "./styles";

export default function ObjetivoAlcancado() {
  const navigation = useNavigation();

  function handleNavigateToNewGoal() {
    navigation.navigate("CadastrarObjetivo");
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <GoBack />

        <Image source={Img} style={styles.logo} />

        <Text style={styles.parabens}>Parabéns</Text>

        <View style={styles.textContent}>
          <Text style={styles.cashTitle}>Obetivo Alcançado</Text>

          <Text style={styles.cashText}>R$ 1.000,00</Text>

          <View style={styles.textSubContent}>
            <Text>Vamos continuar trabalhando no seu futuro?</Text>
          </View>
        </View>

        <ButtonPlus
          label="Adicionar objetivo"
          onPress={handleNavigateToNewGoal}
        />
      </View>
    </ScrollView>
  );
}
