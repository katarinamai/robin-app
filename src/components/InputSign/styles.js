import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Colors from '../../styles/colors';
export { Colors };


export default StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 24,
  },

  label: {
    position: 'absolute',
    padding: 16
  },

  input: {
    backgroundColor: "#21212114",
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 16
  },

  iconPassword: {
    fontSize: 24,
    position: 'absolute',
    right: 16,
    color: "#3d3d3d"
  }
})
