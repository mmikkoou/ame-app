import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const PressableButton = ({ onPress, title }) => (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );

  export default PressableButton;

  const ButtonContainer = styled.TouchableOpacity`
  margin-bottom: 44px;
  height: 65px;
  padding: 20px 30px;
  border-radius: 100px;
  border-color: #fff;
  background-color: #fff;
  box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.5);
`;
const ButtonText = styled.Text`
  font-size: 15px;
  text-align: center;
  line-height: 25px;
  color: #3F3F3F;
`;