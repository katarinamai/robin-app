import React from "react";
import { StatusBar } from "react-native";
import { AppLoading } from 'expo'

import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F7931E"></StatusBar>
      <Routes />
    </>
  );
}
