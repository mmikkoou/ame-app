import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const Numerator = ({title, title_sec}) => (
    <NumeratorContainer>
        <FirstText>{title}</FirstText>
        <Image source={require('../assets/slash.png')} style={{height: 15, width: 5, marginTop: 7.5, marginBottom: 7.5, alignItems: 'center', justifyContent: 'center'}} />
        <SecondText>{title_sec}</SecondText>
    </NumeratorContainer>
);
export default Numerator;

const NumeratorContainer = styled.View`
    flex-direction: row;
    margin-right: 5px;
    margin-vertical: 12px;
`;

const FirstText = styled.Text`
    font-size: 12px;
    width: 40px;
    line-height: 20px;
    padding: 5px 0 5px 5px;
    color: #fff;
`;

const SecondText = styled.Text`
    font-size: 12px;
    width: 40px;
    line-height: 20px;
    align-items: flex-end;
    text-align: right;
    padding: 5px 0 5px 5px;
    color: #fff;
`;