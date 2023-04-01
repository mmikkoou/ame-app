import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const ButtonBack = ({ onPress, bgColor, title }) => (
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
        <Image source={require('../assets/arrow.png')} style={{height: 25, width: 10, margin: 15}}/>
    </ButtonContainer>
  );
  export default ButtonBack;

  const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 55px;
  width: 55px;
  border-radius: 100px;
  background-color: #242424;
  padding: 5px;
`;

