import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import GoBack from "../../components/GoBack";
import BarOnboarding from "../../components/BarOnboarding";
import BotaoRetangular from "../../components/botao-retangular";

import styles from "./styles";

export default function Onboarding2() {
  const navigation = useNavigation();

  return (
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

      <View style={styles.cadastrar}>
        <BotaoRetangular
          title="CADASTRAR BANCO"
          onPress={() => {
            navigation.navigate("CadastrarBanco");
          }}
        />
      </View>

      <Button
        label="Pular Etapa"
        onPress={() => {
          navigation.navigate("Onboarding3");
        }}
      />
    </View>
  );
}
