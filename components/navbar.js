import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import ButtonBack from '../components/button_back';
import { Welcome } from '../screens/welcome';

const Navbar = ({ navigation }) => (
    <NavbarContainer>
        <ButtonBack onPress={() => navigation.navigate('Welcome')} />
        <ButtonBack  />
    </NavbarContainer>
);

export default Navbar;

const NavbarContainer = styled.SafeAreaView`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 370px;
    height: 55px;
    background-color: #242424;
    border-radius: 1000px;
`;