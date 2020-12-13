import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import BarOnboarding from "../../components/BarOnboarding";

import ImgBemVinde from "../../assets/bem_vinde.png";

import styles from "./styles";

export default function Onboarding1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.barsContainer}>
        <BarOnboarding selected />
        <BarOnboarding spaced />
        <BarOnboarding />
      </View>

      <Image source={ImgBemVinde} style={{ marginBottom: 32 }} />

      <Button
        label="Pular Etapa"
        onPress={() => {
          navigation.navigate("Onboarding2");
        }}
      />
    </View>
  );
}
