import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Button, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";

import GoBack from "../../components/GoBack";
import BotaoRetangular from "../../components/botao-retangular";

import api from "../../services/api";

import styles from "./styles";

export default function CadastrarBanco() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <GoBack />

      <Text style={styles.titulo}>Cadastrar conta bancária</Text>
      <BotaoRetangular
        title="Conta"
        onPress={() => {
          navigation.navigate("Autenticacao");
        }}
      />
      <Button
        style={styles.bancosContent}
        onPress={() => {
          navigation.navigate("PagarDivida");
        }}
      >
        <Icon name="key" style={{ color: "gray" }} />
        <View>
          <Text>Banco 1</Text>
          <Text>Nº Conta: </Text>
          <Text>Agência: </Text>
        </View>
      </Button>
      <Button
        style={styles.bancosContent}
        onPress={() => {
          navigation.navigate("PagarDivida");
        }}
      >
        <Icon name="key" style={{ color: "gray" }} />
        <View>
          <Text>Banco 2</Text>
          <Text>Nº Conta: </Text>
          <Text>Agência: </Text>
        </View>
      </Button>
    </View>
  );
}
