import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import ButtonPrimary from '../components/button_primary';
import TextButton from '../components/text_button';

export const OnbordingHome  = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#101010'}}>
            <RoomName>Комната №1</RoomName>
            <Field>
            <TextField>
                <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>Ура! Вы создали свою первую комнату. Теперь нужно пройти небольшое обучение, чтобы лучше разобраться во всех наших примочках</Text>
            </TextField>
            <ButtonPrimary onPress={() => navigation.navigate('Onbording_3')} title='Начать обучение' />
            </Field>
            <TextButton onPress={() => navigation.navigate('Profile')} title='я все знаю, пропустить обучение'/>
        </SafeAreaView>
    );
  }

const TextField = styled.View`
  width: 370px;
  margin-bottom: 20px;
  align-items: center;
  padding: 25px 20px;
  border-radius: 15px;
  background-color: #1C1C1C;
`;

const RoomName = styled.Text`
  font-size: 12px;
  line-height: 20px;
  height: 30px;
  text-align: center;
  color: white;
`;

const Field = styled.View`

`;