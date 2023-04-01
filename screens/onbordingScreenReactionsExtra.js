import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import ButtonPrimary from '../components/button_primary';
import TextButton from '../components/text_button';
import ButtonBack from '../components/button_back';
import Numerator from '../components/numerator';

export const OnbordingReactionsExtra  = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#101010'}}>
            <NavbarContainer>
                <ButtonBack onPress={() => navigation.goBack()} />
                <Numerator title='14' title_sec='17'/>
            </NavbarContainer>
            <RoomName>Комната №1</RoomName>
            <Field>
            <TextField>
                <Text style={{fontSize: 25, lineHeight: 35, color: 'white'}}>Язык пальцев</Text>
            </TextField>
            <TextField>
                <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>Чтобы вы могли общаться с другими  пользователями мы придумали пересечения. Представьте — ваш близкий человек находится далеко и вам не хватает телефонных звонков или сообщений</Text>
                <FingerValue>
                    <Text style={{fontSize: 12, lineHeight: 20, color: 'white'}}>Когда вы и ваш собеседник используете приложение одновременно, то вы видите пальцы и жесты вашего собеседника как через прозрачное стекло. Поставив пальцы в нужное место, вы сможете спровоцировать пересечение</Text>
                </FingerValue>
            </TextField>
            </Field>
            <ButtonPrimary onPress={() => navigation.navigate('Onbording_17')} title='Хочу попробовать!' />
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

const FingerValue = styled.View`
  margin: 20px 20px 0 20px;
  padding: 20px;
  width: 330px;
  justify-content: center;
  align-items: center;
  border: 1px solid #2D2D2D;
  border-radius: 10px;
`;