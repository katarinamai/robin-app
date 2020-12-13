import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import InputSignup from "../../components/InputSign";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

import api from "../../services/api";

export default function Cadastro() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [loading, setLoading] = useState(false)

  async function handleSignup() {
    const data = {
      name,
      email: email.toLocaleLowerCase(),
      documentNumber,
      password
    }

    try {
      setLoading(true)
      await api.post("/accounts", data)
      setLoading(false)

      navigation.navigate("Login")
    } catch(e) {
      Alert.alert("E-mail ou CPF já existente!")
    }
  }

  if(loading) {
    return <Loading />
  }

  return (
    <ScrollView style={styles.viewContainer}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={logoImg} style={styles.logo} />

          <InputSignup
            label="Como você se chama?"
            value={name}
            onChangeText={setName}
          />

          <InputSignup label="CPF" value={documentNumber} onChangeText={setDocumentNumber} />
          <InputSignup label="E-mail" value={email} onChangeText={setEmail} />

          <InputSignup
            label="Senha"
            value={password}
            onChangeText={setPassword}
            isPassword
          />

          <Button
            label="Cadastrar"
            onPress={handleSignup}
          />

          <TouchableOpacity
            style={{ marginTop: 32 }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ fontSize: 16 }}>
              Já possui uma conta? Clique aqui!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
