import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center"
  },
  balance: {
    color: "#F7931E",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    fontSize: 36,
    marginTop: 50,
  },
  label: {
    color: "#a8a8a8",
    textTransform: "uppercase",
    marginVertical: 8
  },
  cashback: {
    color: "#F7931E",
    textTransform: "uppercase"
  }
})
