import React from 'react';
import { Image, Text } from 'react-native';
import styled from 'styled-components/native';

const TextButton = ({ onPress, title }) => (
    <ButtonContainer onPress={onPress}>
        <Text style={{fontSize: 12, lineHeight: 20, color: 'white'}}>{title}</Text>
    </ButtonContainer>
  );
  export default TextButton;

  const ButtonContainer = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  padding-bottom: 1px;
  border-bottom-color: white;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;
