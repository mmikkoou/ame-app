import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import styled from 'styled-components/native';
import PressableButton from '../components/button_big';
import ButtonBack from '../components/button_back';
import Numerator from '../components/numerator';
import RegistrationInput from '../components/input';

export const LogInPhone  = ({ navigation, route }) => {
    return (
        <Container>
            <NavbarContainer>
                <ButtonBack onPress={() => navigation.goBack()} />
                <Numerator title='1' title_sec='3'/>
            </NavbarContainer>
            <RegistrationInput placeholder='example@hse.ru' label='Введите вашу почту'/>
            <PressableButton onPress={() => navigation.navigate('Login_2')} title='Готово'/>
            <StatusBar style="auto" />
        </Container>
    );
  }

const Container = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  background-color: #101010;
  align-items: center;
  height: 100%;
`;

const NavbarContainer = styled.SafeAreaView`
    flex-direction: row;
    justify-content: space-between;
    width: 370px;
    height: 30px;
    flex: 1;
`;