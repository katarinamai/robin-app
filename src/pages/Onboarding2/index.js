import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import GoBack from "../../components/GoBack";
import BarOnboarding from "../../components/BarOnboarding";
import ButtonPlus from "../../components/ButtonPlus";

import styles from "./styles";

export default function Onboarding2() {
  const navigation = useNavigation();

  function handleNavigateToCreateBank() {
    navigation.navigate("CadastrarBanco");
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.barsContainer}>
          <BarOnboarding />
          <BarOnboarding spaced selected />
          <BarOnboarding />
        </View>

        <GoBack />

        <Text style={styles.titulo}>
          Cadastre sua conta bancária, para podermos acessar sua movimentação
          financeira dos últimos 3 meses e assim criarmos o seu perfil de
          investimentos.
        </Text>

        <Text style={styles.subTitulo}>
          Iremos acessar somente como visualização e não teremos permissão para
          movimentar nenhum valor por você
        </Text>

        <ButtonPlus
          label="Cadastrar Banco"
          onPress={handleNavigateToCreateBank}
        />

        <View style={{ marginBottom: 32 }} />

        <Button
          label="Pular Etapa"
          onPress={() => {
            navigation.navigate("Onboarding3");
          }}
        />
      </View>
    </ScrollView>
  );
}
