import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import styles from "./styles";

function Loading() {
  return (
    <View style={styles.container}>
      <View style={styles.loading}>
          <Text style={styles.title}>Processando seus dados...</Text>
        <ActivityIndicator size="large" color="#F7931E" />
      </View>
    </View>
  );
}

export default Loading
