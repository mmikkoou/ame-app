import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import styled from 'styled-components/native';
import PressableButton from '../components/button_big';
import ButtonBack from '../components/button_back';
import Numerator from '../components/numerator';
import RegistrationInput from '../components/input';

export const SignInPassword  = ({ navigation, route }) => {
    return (
        <Container>
            <NavbarContainer>
                <ButtonBack onPress={() => navigation.goBack()} />
                <Numerator title='2' title_sec='2'/>
            </NavbarContainer>
            <RegistrationInput placeholder='password' label='Введите пароль от аккаунта' password/>
            <PressableButton onPress={() => navigation.navigate('Profile')} title='Готово'/>
            <StatusBar style="auto" />
        </Container>
    );
  }

const Container = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  background-color: #101010;
  align-items: center;
  height: 100%;
`;

const NavbarContainer = styled.SafeAreaView`
    flex-direction: row;
    justify-content: space-between;
    align-items: left;
    width: 370px;
    height: 30px;
    flex: 1;
`;