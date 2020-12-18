import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import BackToHome from "../../components/BackToHome";
import Loading from "../../components/Loading";

import logoRobin from "../../assets/logo_white.png";
import paysmart from "../../assets/paysmart.png";

import styles from "./styles";

import api from "../../services/api";

function VirtualCard() {
  const params = useRoute().params;
  const [cardInfo, setCardInfo] = useState();

  useEffect(() => {
    api.get(`accounts/${params.user_id}`).then((response) => {
      setCardInfo(response.data.virtualCard);
    })
  }, [params]);

  if (!cardInfo) {
    return <Loading />
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.back}>
        <BackToHome pageTitle="Cartão virtual" />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.cardImgContainer}>
          <Image style={styles.cardImgRobin} source={logoRobin} />
          <Image style={styles.cardImgPaySmart} source={paysmart} />
        </View>

        <View style={styles.cardNumberContainer}>
          <Text style={styles.cardNumber}>
            {cardInfo.vPan.split("").splice(0, 4)}
          </Text>
          <Text style={styles.cardNumber}>
            {cardInfo.vPan.split("").splice(4, 4)}
          </Text>
          <Text style={styles.cardNumber}>
            {cardInfo.vPan.split("").splice(8, 4)}
          </Text>
          <Text style={styles.cardNumber}>
            {cardInfo.vPan.split("").splice(12, 4)}
          </Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Nome do titular</Text>
        <Text style={styles.infoText}>{cardInfo.vCardholder}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Data de vencimento</Text>
        <Text style={styles.infoText}>{cardInfo.vDateExp}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Código de segurança</Text>
        <Text style={styles.infoText}>{cardInfo.vCvv}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Feather name="trash" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Deletar cartão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Feather name="x-circle" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Bloquear cartão</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default VirtualCard;
