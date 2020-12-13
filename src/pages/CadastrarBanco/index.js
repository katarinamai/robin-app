import React, { useState, useEffect } from 'react';
import { View, Text, Image} from 'react-native';
import { Divider } from 'react-native-elements';
import { Button, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import BotaoBack from '../../components/botao-back';
import BotaoRetangular from '../../components/botao-retangular';
import api from '../../services/api';
import Img from '../../assets/undraw_stepping_up_g6oo.png';


export default function CadastrarBanco({ navigation: { goBack } }) {
    const navigation = useNavigation()
    
    return(
        <View style={styles.container} >
             <View style={styles.back}>
                <BotaoBack
                onPress={() => goBack()}/>
            </View>
           <Text style={styles.titulo}>Cadastrar conta bancária</Text>
           <BotaoRetangular 
           title="Conta"
           onPress={() => {navigation.navigate('Autenticacao')}}
           />
           <Button 
            style={styles.bancosContent}
            onPress={() => {navigation.navigate('PagarDivida')}}>
              <Icon name="key" style={{color:"gray"}}/>
              <View>
                <Text>Banco 1</Text>
                <Text>Nº Conta: </Text>
                <Text>Agência: </Text>
              </View>
           </Button>
           <Button 
            style={styles.bancosContent}
            onPress={() => {navigation.navigate('PagarDivida')}}>
              <Icon name="key" style={{color:"gray"}} />
              <View>
                <Text>Banco 2</Text>
                <Text>Nº Conta: </Text>
                <Text>Agência: </Text>
              </View>
           </Button>
        </View>
    );
}