import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import ButtonPrimary from '../components/button_primary';
import ButtonBack from '../components/button_back';
import Numerator from '../components/numerator';

export const OnbordingBot  = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#101010'}}>
            <NavbarContainer>
                <ButtonBack onPress={() => navigation.goBack()} />
                <Numerator title='15' title_sec='17'/>
            </NavbarContainer>
            <RoomName>Комната №1</RoomName>
            <Field>
            <TextField>
                <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>Это Алиса: она сейчас находится в вашем пространстве и она использует 2 пальца, для создания жестов. Чтобы начать общаться с ней, тоже используйте 2 пальца</Text>
            </TextField>
            <GestureField>
                <Image source={require('../assets/reactionAnimation.png')} style={{width: 298, height: 257}}/>
            </GestureField>
            </Field>
            <ButtonPrimary onPress={() => navigation.navigate('Onbording_18')} title='Взаимодействовать с Алисой' />
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
  margin-bottom: 10px;
  align-items: flex-start;
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

const GestureField = styled.View`
    width: 370px;
    height: 420px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: #151515;
    border: 1px dashed #2D2D2D;
`;