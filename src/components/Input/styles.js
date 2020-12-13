import { StyleSheet } from 'react-native';
import * as Colors from '../../styles/colors';
export { Colors };


export default StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    position: 'relative',
    marginTop: 24,
    marginBottom: 8
  },

  label: {
    position: 'absolute',
    padding: 16
  },

  input: {
    borderColor: "#ccc",
    borderStyle: 'solid',
    borderWidth: 1,
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 16
  },

  inputCash: {
    paddingLeft: 40
  }
})
