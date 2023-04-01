import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import ButtonPrimary from '../components/button_primary';
import TextButton from '../components/text_button';
import ButtonBack from '../components/button_back';
import Numerator from '../components/numerator';

export const OnbordingEnd  = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#101010'}}>
            <NavbarContainer>
                <ButtonBack onPress={() => navigation.goBack()} />
                <Numerator title='17' title_sec='17'/>
            </NavbarContainer>
            <RoomName>Комната №1</RoomName>
            <Field>
            <TextField>
                <Text style={{fontSize: 25, lineHeight: 35, color: 'white'}}>Обучение пройдено</Text>
            </TextField>
            <TextField>
                <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>Поздравляем — у вас произошло пересечение с Алисой! Теперь вы знаете, как работает язык приложения и как пользоваться комнатой</Text>
            </TextField>
            <TextField>
                <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>Если вдруг вы запутаетесь — не страшно, нашу инструкцию можно найти в меню - жесты</Text>
            </TextField>

            </Field>
            <ButtonPrimary onPress={() => navigation.navigate('Profile')} title='Вернуться в общее пространство' />
        </SafeAreaView> 
    );
  }

const NavbarContainer = styled.SafeAreaView`
    flex-direction: row;
    justify-content: space-between;
    align-items: left;
    width: 370px;
    height: 30px;
    margin-bottom: 35px;
`;

const TextField = styled.View`
  width: 370px;
  margin-bottom: 5px;
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
  color: #3F3F3F;
`;

const Field = styled.View`
  height: 610px;
`;