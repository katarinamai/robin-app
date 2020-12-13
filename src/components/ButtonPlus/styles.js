import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    backgroundColor: "#FBB03B",
    width: '90%',
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: "center",
    position: "relative"
  },
  buttonIcon: {
    fontSize: 24,
    color: "#000000de",
    position: "absolute",
    left: 16
  },
  buttonText: {
    color: '#000000de',
    textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: "Roboto_500Medium"
  }
});
