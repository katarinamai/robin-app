import React from 'react'
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const BotaoQuadrado = (props) => {
    const navigation = useNavigation();

        return(
            <Button
                title={props.title}
                buttonStyle={{
                    backgroundColor: "#F7931E"
                 }}                 
                onPress={props.onPress}
            />
        );
}

export default BotaoQuadrado;