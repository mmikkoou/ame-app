import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PressableButton from '../components/button_big';


export const Welcome = ( {navigation} ) => {
    return (
        <Container>
            <Image source={require('../assets/ame_logo.png')} style={{height: 63, width: 132, bottom: 300}} />
            <PressableButton onPress={() => navigation.navigate('Signin_1')} title='Войти по номеру телефона'/>
            <SingUpLink>Еще нет аккаунта? <Link onPress={() => navigation.navigate('Login_1')}>Зарегистрироваться</Link> </SingUpLink>
            <StatusBar style="auto" />
        </Container>
    );
  }

  const Container = styled.View`
    flex-direction: column;
    background-color: #101010;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
  `;

  const SingUpLink = styled.Text `
    font-size: 12px;
    color: white;
    margin-bottom: 44px;
  `;

  const Link = styled.Text`
    text-decoration-line: underline;
    color: white;
  `;