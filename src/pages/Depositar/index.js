import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import GoBack from "../../components/GoBack";
import Loading from "../../components/Loading";

import styles from "./styles";
import api from "../../services/api";

export default function Onboarding1() {
  const navigation = useNavigation();
  const [user_id, setUser_id] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem("user_id").then((response) => {
      setUser_id(response);
    });
  }, []);

  async function handleAddCash() {
    setLoading(true)

    const data = {
      account_id: user_id,
      operation_type_id: 1,
      amount: 7252
    }

    await api.post('/transactions', data)

    setLoading(false)

    navigation.navigate('Principal')
  }

  if(loading || !user_id) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <GoBack />

      <Text style={styles.title}>
        Dados bancários
      </Text>
      <Text>
        Agência: <Text style={styles.subTitle}>0655</Text>
      </Text>
      <Text>
        Conta: <Text style={styles.subTitle}>31604-0</Text>
      </Text>
      <Text>
        Número do banco: <Text style={styles.subTitle}>001</Text>
      </Text>
      <Button
        title="COMPARTILHAR"
        buttonStyle={styles.botao}
        titleStyle={{alignItems: 'center',}}
        onPress={handleAddCash}
      />
    </View>
  );
}
