import React from 'react';
import { StatusBar, StyleSheet, Image, View } from 'react-native';
import styled from 'styled-components/native';
import ButtonPrimary from '../components/button_primary';

const ProfileInfo = ({ onPress }) => (
        <Container>
            <View style={{flexDirection: 'column', alignItems: 'center', marginHorizontal: 10, marginTop: 50}}>
                <UserName>Константин</UserName>
                <UserPhone>+7 964 964 96 64</UserPhone>
            </View>
            <ButtonPrimary title='Редактирвать профиль' />
        </Container>
  );

export default ProfileInfo;

const Container = styled.View`
    height: 250px;
    width: 245px;
    flex-direction: column;
    background-color: #101010;
    align-items: center;
    justify-content: flex-start;
    border-radius: 35px;
    border: 1.5px solid #1A1A1A
`;

const UserName = styled.Text`
    font-size: 35px;
    line-height: 40px;
    color: #fff;
`;

const UserPhone = styled.Text`
    font-size: 15px;
    line-height: 25px;
    margin-top: 15px;
    margin-bottom: 50px;
    color: #fff;
`;