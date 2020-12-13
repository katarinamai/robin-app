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
    bancosContent: {
        flexDirection: 'row',
        height:70,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius:0,
        elevation:0,
        alignItems: 'flex-start',
        marginTop:100,
    },
    titulo: {
        marginBottom: 50,
    }
});