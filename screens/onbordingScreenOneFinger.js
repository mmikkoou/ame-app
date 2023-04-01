import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import ButtonPrimary from '../components/button_primary';
import ButtonBack from '../components/button_back';
import Numerator from '../components/numerator';

export const OnbordingOneFinger  = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#101010'}}>
            <NavbarContainer>
                <ButtonBack onPress={() => navigation.goBack()} />
                <Numerator title='3' title_sec='17'/>
            </NavbarContainer>
            <RoomName>Комната №1</RoomName>
            <Field>
            <TextField>
                <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>Прикоснитесь к выделенной области 1 пальцем</Text>
                <FingerValue>
                    <Text style={{fontSize: 12, lineHeight: 20, color: 'white'}}>любовь, симпатия, увлеченность</Text>
                </FingerValue>
            </TextField>
            <GestureField>
                <Image source={require('../assets/oneFingerAnimation.png')} style={{width: 219, height: 219}}/>
            </GestureField>
            </Field>
            <ButtonPrimary onPress={() => navigation.navigate('Onbording_6')} title='Дальше' />
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

const FingerValue = styled.View`
  margin: 20px 20px 0 0;
  height: 60px;
  width: 330px;
  justify-content: center;
  align-items: center;
  border: 1px solid #2D2D2D;
  border-radius: 10px;
`;

const GestureField = styled.View`
    width: 370px;
    height: 400px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: #151515;
    border: 1px dashed #2D2D2D;
`;