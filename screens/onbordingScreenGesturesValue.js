import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import ButtonPrimary from '../components/button_primary';
import TextButton from '../components/text_button';
import ButtonBack from '../components/button_back';
import Numerator from '../components/numerator';

export const OnbordingGesturesValue  = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#101010'}}>
            <NavbarContainer>
                <ButtonBack onPress={() => navigation.goBack()} />
                <Numerator title='8' title_sec='17'/>
            </NavbarContainer>
            <RoomName>Комната №1</RoomName>

            <Field>
            <TextField>
                <Text style={{fontSize: 25, lineHeight: 35, color: 'white'}}>Значение жестов</Text>
            </TextField>

            <FingersValue>
                <FingerSign>
                    <Text style={{fontSize: 12, lineHeight: 20, color: 'white'}}>касание</Text>
                </FingerSign>
                <SecondaryTextField>
                    <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>позволяет показать эмоцию, которая выбрана</Text>
                </SecondaryTextField>
            </FingersValue>

            <FingersValue>
                <FingerSign>
                    <Text style={{fontSize: 12, lineHeight: 20, color: 'white'}}>зажатие</Text>
                </FingerSign>
                <SecondaryTextField>
                    <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>эмоция длительна и развивается</Text>
                </SecondaryTextField>
            </FingersValue>

            <FingersValue>
                <FingerSign>
                    <Text style={{fontSize: 12, lineHeight: 20, color: 'white'}}>зум</Text>
                </FingerSign>
                <SecondaryTextField>
                    <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>увеличивает и уменьшает размер эмоции</Text>
                </SecondaryTextField>
            </FingersValue>

            <FingersValue>
                <FingerSign>
                    <Text style={{fontSize: 12, lineHeight: 20, color: 'white'}}>движение</Text>
                </FingerSign>
                <SecondaryTextField>
                    <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>эмоция находится в постоянном движении</Text>
                </SecondaryTextField>
            </FingersValue>

            </Field>
            <ButtonPrimary onPress={() => navigation.navigate('Onbording_11')} title='Дальше' />
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

const FingersValue = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 370px;
  margin-bottom: 5px;
`;

const SecondaryTextField = styled.View`
    width: 275px;
    height: 90px;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    border-radius: 15px;
    background-color: #1C1C1C;
`;

const FingerSign = styled.View`
    width: 90px;
    height: 90px;
    margin-right: 5px;
    align-items: center;
    justify-content: center;
    padding: 10px;
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