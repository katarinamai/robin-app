import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import BotaoBack from '../../components/botao-back';
import api from '../../services/api';
import DatePicker from 'react-native-datepicker';
import BotaoQuadrado from '../../components/botao-quadrado';


export default function Divida({ navigation: { goBack } }) {

    const navigation = useNavigation();
    const [date, setDate] = useState('01-02-2021');

    return(
        <View style={styles.container} >
            <View style={styles.back}>
                <BotaoBack
                onPress={() => goBack()}/>
            </View>
            <Text style={styles.titulo}>Valor da dívida</Text>
            <Text style={styles.divida} >R$ 345,35</Text>
            <View style={styles.content}>
              <Text style={styles.titulo}>Dê um nome para a dívida</Text>
              <Input
                placeholder='Dê um nome para o seu objetivo'
                defaultValue="Dívida 1"
                containerStyle={{margin:0}}
              />
              <Text style={styles.titulo}>Data final da dívida</Text>
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
            </View>
            <Text style={styles.cashback}>CASHBACK: R$ 17,25</Text>
            <BotaoQuadrado
                title="CADASTRAR"
                onPress={() => {navigation.navigate('Principal')}}
            />
        </View>
    );
}