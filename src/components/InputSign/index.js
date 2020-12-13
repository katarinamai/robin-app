import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'

import styles from "./styles";

function InputSignup({ label, value, onChangeText, isPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <View style={styles.inputContainer}>
      {value.length == 0 && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && !showPassword}
      ></TextInput>

      {
        isPassword &&
        <Feather
          name={`eye${showPassword ? "-off" : "" }`}
          style={styles.iconPassword}
          onPress={handleShowPassword}
        />}
    </View>
  );
}

export default InputSignup;
