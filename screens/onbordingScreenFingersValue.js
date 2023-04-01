import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import ButtonPrimary from '../components/button_primary';
import TextButton from '../components/text_button';
import ButtonBack from '../components/button_back';
import Numerator from '../components/numerator';

export const OnbordingFingersValue  = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#101010'}}>
            <NavbarContainer>
                <ButtonBack onPress={() => navigation.goBack()} />
                <Numerator title='2' title_sec='17'/>
            </NavbarContainer>
            <RoomName>Комната №1</RoomName>

            <Field>
            <TextField>
                <Text style={{fontSize: 25, lineHeight: 35, color: 'white'}}>Значение пальцев</Text>
            </TextField>

            <FingersValue>
                <FingerSign></FingerSign>
                <SecondaryTextField>
                    <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>любовь, симпатия, увлеченность</Text>
                </SecondaryTextField>
            </FingersValue>

            <FingersValue>
                <FingerSign></FingerSign>
                <SecondaryTextField>
                    <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>радость, спокойствие, счастье</Text>
                </SecondaryTextField>
            </FingersValue>

            <FingersValue>
                <FingerSign></FingerSign>
                <SecondaryTextField>
                    <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>нежность, забота, поддержка</Text>
                </SecondaryTextField>
            </FingersValue>

            <FingersValue>
                <FingerSign></FingerSign>
                <SecondaryTextField>
                    <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>печаль, тревога, тоска, обида и гнев</Text>
                </SecondaryTextField>
            </FingersValue>

            </Field>
            <ButtonPrimary onPress={() => navigation.navigate('Onbording_5')} title='Дальше' />
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
    padding: 20px;
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