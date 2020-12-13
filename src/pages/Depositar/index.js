import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import BotaoBack from "../../components/botao-back";

export default function Onboarding1({ navigation: { goBack } }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <BotaoBack onPress={() => goBack()} />
      </View >
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
          onPress={() => {navigation.navigate('Onboarding3')}}
      />
    </View>
  );
}
