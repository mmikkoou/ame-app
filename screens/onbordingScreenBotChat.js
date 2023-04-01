import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import ButtonPrimary from '../components/button_primary';
import ButtonBack from '../components/button_back';
import Numerator from '../components/numerator';

export const OnbordingBotChat  = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#101010'}}>
            <NavbarContainer>
                <ButtonBack onPress={() => navigation.goBack()} />
                <Numerator title='16' title_sec='17'/>
            </NavbarContainer>
            <RoomName>Комната №1</RoomName>
            <Field>
            <GestureField>
                <Image source={require('../assets/reactionAnimationBot.png')} style={{width: 325, height: 396}}/>
            </GestureField>
            </Field>
            <ButtonPrimary onPress={() => navigation.navigate('Onbording_19')} title='Дальше' />
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
    height: 580px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: #151515;
    border: 1px dashed #2D2D2D;
`;