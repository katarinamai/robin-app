import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    backgroundColor: "#fbb03b80",
    marginBottom: 16,
    borderRadius: 10
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#F7931E",
    fontWeight: "bold",
    fontSize: 16
  },
  percent: {
    color: "#FFF",
    fontSize: 14
  },
  balance: {
    color: "#00000099",
    marginVertical: 8
  },
  cashback: {
    color: "#fff",
    textTransform: "uppercase"
  }
})
