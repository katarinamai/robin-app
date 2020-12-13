import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import GoBack from "../../components/GoBack";
import BarOnboarding from "../../components/BarOnboarding";
import BotaoRetangular from "../../components/botao-retangular";

import styles from "./styles";

export default function Onboarding3() {
  const navigation = useNavigation();

  return (
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

      <Text style={styles.subTitulo}>Você terá acesso ao cartão físico</Text>

      <Text style={styles.subTitulo}>e virtual.</Text>

      <View style={styles.cadastrar}>
        <BotaoRetangular
          title="DEPOSITAR DINHEIRO"
          onPress={() => {
            navigation.navigate("Depositar");
          }}
        />
      </View>

      <Button
        label="Pular Etapa"
        onPress={() => {
          navigation.navigate("Principal");
        }}
      />
    </View>
  );
}
