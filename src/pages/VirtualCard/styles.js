import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 24
  },
  cardContainer: {
    backgroundColor: "#FF7F00",
    padding: 24,
    borderRadius: 20,
    marginBottom: 32
  },
  cardImgContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 64
  },
  cardImgRobin: {
    width: 87,
    height: 28
  },
  cardImgPaySmart: {
    width: 50,
    height: 35
  },
  cardNumberContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  cardNumber: {
    fontFamily: "Roboto_300Light",
    marginRight: 16,
    fontSize: 24,
    color: "#fff"
  },
  infoContainer: {
    marginTop: 16
  },
  infoTitle: {
    fontFamily: "Roboto_300Light",
    fontSize: 16
  },
  infoText: {
    fontFamily: "Roboto_700Bold",
    fontWeight: "bold",
    color: "#FBB03B",
    fontSize: 16,
    marginTop: 8
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32
  },
  button: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonText: {
    fontFamily: "Roboto_400Regular",
    color: "#343434"
  },
  buttonIcon: {
    color: "#F7931E",
    fontSize: 24,
    marginRight: 8
  },back: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 90
},
})
