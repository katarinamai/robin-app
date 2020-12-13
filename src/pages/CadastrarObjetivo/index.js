import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import DatePicker from "react-native-datepicker";

import GoBack from "../../components/GoBack";
import Input from "../../components/Input";
import Button from "../../components/Button";

import styles from "./styles";

export default function CadastrarObjetivo() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [cash, setCash] = useState("");
  const [date, setDate] = useState("");
  const [cashback, setCashBack] = useState("00,00");

  useEffect(() => {
    handleCalcCashBack(cash)
  }, [cash])

  function handleNavigationToMain() {
    navigation.navigate("Principal");
  }

  function handleCalcCashBack(value) {
    value = value.replace('-', '.')

    const cash = Number(value)

    const cashback = cash * 0.05

    setCashBack(cashback)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <GoBack />

        <Input value={cash} onChangeText={setCash} isCash />
        <Text style={styles.subTitle}>Quanto quer guardar todo mês?</Text>

        <Input label="Nome objetivo" value={name} onChangeText={setName} />
        <Text style={styles.subTitle}>Dê um nome para o seu Objetivo</Text>

        <DatePicker
          locale="pt-br"
          style={{ width: "100%", marginTop: 24, marginBottom: 8 }}
          mode="date"
          placeholder="Data final do seu objetivo."
          format="DD-MM-yyyy"
          minDate={new Date()}
          maxDate="31-12-2090"
          date={date}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              width: "100%",
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        <Text style={styles.subTitle}>Data final</Text>

        <Text style={styles.cashback}>Cashback: R$ {cashback}</Text>

        <Button onPress={handleNavigationToMain} label="Cadastrar" />
      </View>
    </ScrollView>
  );
}
