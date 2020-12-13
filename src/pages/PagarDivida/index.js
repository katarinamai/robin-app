import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Input, Button, Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import BotaoRedondo from '../../components/botao-redondo'
import BotaoBack from '../../components/botao-back'


import api from '../../services/api';

export default function PagarDivida({ navigation: { goBack } }) {
    const navigation = useNavigation();


    return(
        <View style={styles.container} >
            <View style={styles.back}>
                <BotaoBack
                onPress={() => goBack()}/>
            </View>
            <Text style={styles.textBox}>Identificamos algumas dívidas.</Text>
            <Text style={styles.textBox}>Vamos liquidar isso?</Text>
            <View style={styles.content}>
                <View style={styles.item}> 
                    <BotaoRedondo
                    onPress={() => {navigation.navigate('Divida')}}/>
                    <View>                        
                        <Text style={styles.text} > Dívida identificada</Text>
                        <Text style={styles.subText} > Banco 1</Text>
                        <Text style={styles.subText} > Valor da dívida: R$345,35</Text>
                    </View>
                </View>
                <Divider style={ styles.divider}/>
                <View style={styles.item}>
                    <BotaoRedondo
                    onPress={() => {navigation.navigate('Divida')}}/>
                    <View>
                        <Text style={styles.text} >Dívida identificada</Text>
                        <Text style={styles.subText} >Banco 2 </Text>
                        <Text style={styles.subText} >Valor da dívida: R$345,35</Text>
                    </View>
                </View>
                <Divider style={ styles.divider} />
                <View style={styles.item}>
                    <BotaoRedondo
                    onPress={() => {navigation.navigate('Divida')}}/>
                <Text style={{marginTop: 30, marginLeft: 20}} >Cadastrar outra dívida</Text>
                </View>
            </View>
        </View>
    );
}