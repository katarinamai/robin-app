import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

import styles from "./styles";

function Input({ label, value, onChangeText, isCash }) {
  return (
    <View style={styles.inputContainer}>
      {value.length == 0 && !isCash && <Text style={styles.label}>{label}</Text>}
      {isCash && <Text style={styles.label}>R$</Text>}
      <TextInput
        style={[styles.input, isCash && styles.inputCash ]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={isCash ? "numeric" : "default"}
      ></TextInput>
    </View>
  );
}

export default Input;
