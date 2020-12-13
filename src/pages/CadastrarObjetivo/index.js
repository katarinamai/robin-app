import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import BotaoBack from '../../components/botao-back';
import api from '../../services/api';
import DatePicker from 'react-native-datepicker';
import BotaoQuadrado from '../../components/botao-quadrado'


export default function CadastrarObjetivo({ navigation: { goBack } }) {

    const navigation = useNavigation();
    const [date, setDate] = useState();

    return(
        <View style={styles.container} >
            <View style={styles.back}>
                <BotaoBack
                onPress={() => goBack()}
                />
            </View>
            <Text style={styles.subTitle}>Dê um nome para o seu Objetivo</Text>
            <Input
            placeholder="Nome"/>
            <Text style={styles.subTitle}>Quanto quer guardar todo mês?</Text>
            <Input
            placeholder="R$ 00,00"/>
            <Text style={styles.subTitle}>data final</Text>
            <DatePicker
                locale='pt-br'
                style={{width: '100%'}}
                mode="date"
                placeholder="Data final do seu objetivo."
                format="DD-MM-yyyy"
                minDate={new Date()}
                maxDate="31-12-2090"
                date={date}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput: {
                      marginLeft: 10,
                    width: '100%'
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {setDate(date)}}
              />
                <Text style={styles.cashback}>CASHBACK: </Text>
                <View style={styles.cadastrar}>
                    <BotaoQuadrado
                    title="cadastrar"
                    onPress={() => {navigation.navigate('Principal')}}
                    />
                </View>
        </View>
    );
}