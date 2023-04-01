import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import styled from 'styled-components/native';
import AvatarField from '../components/avatar_add';
import ProfileInfo from '../components/profileInfo';
import ButtonBack from '../components/button_back';
import Navbar from '../components/navbar';

export const Profile  = ({ navigation, route }) => {
    return (
        <Container>
            <AvatarField />
            <ProfileInfo />
            <NavbarContainer>
                <ButtonBack onPress={() => navigation.goBack()}/>
                <ButtonContainer onPress={() => navigation.navigate('Welcome')}>
                    <Image source={require('../assets/exit.png')} style={{height: 25, width: 25, margin: 10}}/>
                </ButtonContainer>
            </NavbarContainer>
        </Container>
    );
  }

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #101010;
  align-items: center;
  justify-content: flex-start;
`;

const NavbarContainer = styled.SafeAreaView`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    width: 370px;
    height: 55px;
    background-color: #242424;
    border-radius: 1000px;
`;

const ButtonContainer = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
height: 55px;
width: 55px;
border-radius: 100px;
background-color: #242424;
padding: 5px;
`;