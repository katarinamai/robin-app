import React, { useState, useEffect } from 'react';
import { View, Text, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import BotaoBack from '../../components/botao-back';
import BotaoRetangular from '../../components/botao-retangular';
import api from '../../services/api';
import Img from '../../assets/undraw_stepping_up_g6oo.png';


export default function ObjetivoAlcancado({ navigation: { goBack } }) {
    const navigation = useNavigation()
    
    return(
        <View style={styles.container} >
             <View style={styles.back}>
                <BotaoBack
                onPress={() => goBack()}/>
            </View>
            <Image source={Img} style={styles.logo} />
            <Text style={styles.parabens}>Parabéns</Text>
            <View style={styles.textContent}>
                <Text>Obetivo Alcançado</Text>
                <Text>R$ 1.000,00</Text>
                <View style={styles.textSubContent}>
                    <Text>Vamos continuar trabalhando</Text>
                    <Text>no seu futuro?</Text>
                </View>
            </View>
            <BotaoRetangular
                title="Adicionar objetivo"
                onPress={() => {navigation.navigate('CadastrarObjetivo')}}
                />
        </View>
    );
}