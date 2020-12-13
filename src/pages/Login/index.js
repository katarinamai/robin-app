import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import InputSignup from "../../components/InputSign";
import Button from "../../components/Button";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

import api from "../../services/api";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AsyncStorage.getItem('user_id').then(response => {
      if(Number(response) > 0) {
        navigation.navigate("Principal")
      }
    })
  }, [])

  async function handleLogin() {
    const data = { email: email.toLocaleLowerCase(), password }

    try {
      const response = await api.post("/accounts/auth", data);

      await AsyncStorage.setItem("user_id", String(response.data.accountId))

      navigation.navigate('Onboarding1')
    } catch (e) {
      Alert.alert("Email/Senha Invalida!")
    }
  }

  return (
    <ScrollView style={styles.viewContainer}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={logoImg} style={styles.logo} />

          <InputSignup label="E-mail" value={email} onChangeText={setEmail} />

          <InputSignup
            label="Senha"
            value={password}
            onChangeText={setPassword}
            isPassword
          />

          <Button
            label="Entrar"
            onPress={handleLogin}
          ></Button>

          <TouchableOpacity
            style={{ marginTop: 32 }}
            onPress={() => {
              navigation.navigate("Cadastro");
            }}
          >
            <Text style={{ fontSize: 16 }}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
