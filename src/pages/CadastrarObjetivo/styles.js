import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Colors from '../../styles/colors';
export { Colors };

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: Colors.SECOND_BACKGROUND,
        alignItems: 'center',
    },
    back: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 90
    },
    subTitle: {
        color: '#a8a8a8',
    },
    cashback: {
        color: '#F7931E',
        marginTop: 60,
    },
    cadastrar: {
        marginTop:50,
    }
});