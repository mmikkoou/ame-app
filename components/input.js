import React from 'react';
import { Image, View, TextInput } from 'react-native';
import styled from 'styled-components/native';

const RegistrationInput = ({label, password, onFocus = () => {}, ...props}) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hidePassword, setHidePassword] = React.useState(password);
    return (
        <InputView>
            <Title>{label}</Title>
            <TextInput secureTextEntry={hidePassword}
            autoCorrect={false}
            onFocus={() => {
                onFocus();
                setIsFocused(true); 
            }}
            onBlur={() => {
                setIsFocused(false);
            }}
            {...props} 
            style={{marginTop: 100, height: 50, width: 320, textAlign: 'center', fontSize: 35, color: 'white'}}/>
            {password && (
                <ShowPassword onPress={()=>setHidePassword(!hidePassword)} >Показать пароль 
                    <Line/> 
                </ShowPassword>
            )}
        </InputView>
    );
};

export default RegistrationInput;

const Title = styled.Text`
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    width: 200px;
    color: white;
`;

const InputView = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 155px;
    margin-bottom: 100%;
    margin-horizontal: 10px;
`;

const ShowPassword = styled.Text`
    font-size: 12px;
    line-height: 11px;
    text-align: center;
    width: 200px;
    margin-top: 25px;
    color: white;
`;

const Line = styled.View`
    height: 1px;
    width: 102px;
    background-color: white;
`;
