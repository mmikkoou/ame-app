import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const OnbordingStart  = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#101010'}}>
            <TextField>
                <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>Добро пожаловать в пространство а́me! Создайте комнату для того, чтобы начать общение</Text>
            </TextField>
            <ButtonMenu onPress={() => {navigation.navigate('Onbording_2')}}>
                <Image source={require('../assets/buttonAdd.png')} style={{height: 55, width: 55}} />
            </ButtonMenu>
        </SafeAreaView>
    );
  }

const TextField = styled.View`
  width: 370px;
  align-items: center;
  padding: 25px 20px;
  border-radius: 15px;
  background-color: #1C1C1C;
`;

const ButtonMenu = styled.TouchableOpacity`
  margin-top: 280px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.7);
`;