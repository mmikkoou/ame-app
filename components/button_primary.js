import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const ButtonPrimary = ({ onPress, title }) => (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );

  export default ButtonPrimary;

  const ButtonContainer = styled.TouchableOpacity`
  margin-bottom: 44px;
  height: 55px;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  border-radius: 100px;
  border-color: #fff;
  background-color: #fff;
`;
const ButtonText = styled.Text`
  font-size: 15px;
  text-align: center;
  line-height: 25px;
  color: #3F3F3F;
`;