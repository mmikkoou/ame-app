import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import ButtonPrimary from '../components/button_primary';
import TextButton from '../components/text_button';
import ButtonBack from '../components/button_back';
import Numerator from '../components/numerator';

export const OnbordingGestures  = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#101010'}}>
            <NavbarContainer>
                <ButtonBack onPress={() => navigation.goBack()} />
                <Numerator title='7' title_sec='17'/>
            </NavbarContainer>
            <RoomName>Комната №1</RoomName>
            <Field>
            <TitleField>
                <Text style={{fontSize: 25, lineHeight: 35, color: 'white'}}>Жесты</Text>
            </TitleField>
            <TextField>
                <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>Также в приложении есть жесты — их можно воспроизвести любым количеством пальцев, они позволяют вам показать силу или направление вашей эмоции</Text>
            </TextField>
            <TextField>
                <Text style={{fontSize: 15, lineHeight: 25, color: 'white'}}>Как в жизни — вы можете говорить тише, а можете громче</Text>
            </TextField>
            </Field>
            <ButtonPrimary onPress={() => navigation.navigate('Onbording_10')} title='Что за жесты?' />
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
  align-items: flex-start;
  padding: 25px 20px;
  border-radius: 15px;
  background-color: #1C1C1C;
`;

const TitleField = styled.View`
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