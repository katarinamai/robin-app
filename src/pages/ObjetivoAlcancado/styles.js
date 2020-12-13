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
    parabens: {
        color: '#F7931E',
        fontSize:36,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1,
        marginBottom:20,
        marginTop: 20,
    },
    textContent: {
        fontSize: 16,
        alignItems: 'center',
        height: 200,
    },
    textSubContent: {
        marginTop:20,
        alignItems: 'center',
    },
});