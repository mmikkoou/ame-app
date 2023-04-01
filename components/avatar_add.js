import React from 'react';
import { StatusBar, StyleSheet, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const AvatarField = ({ onPress }) => (
    <SafeAreaView>
        <Container>
            <View style={{flexDirection: 'row', height: 55, width: 345, alignItems: 'center', justifyContent: 'space-between'}}>
                <AvatarText>Добавьте своё фото</AvatarText>
                <ButtonAdd>
                    <Image source={require('../assets/buttonAdd.png')} style={{height: 55, width: 55}}/>
                </ButtonAdd>
            </View>
        </Container>
    </SafeAreaView>
  );

  export default AvatarField;

const Container = styled.View`
  height: 370px;
  width: 370px;
  flex-direction: row;
  background-color: #1A1A1A;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
`;

const AvatarText = styled.Text`
    font-size: 15px;
    line-height: 25px;
    color: #fff;
`;

const ButtonAdd = styled.TouchableOpacity`
    height: 55px;
    width: 55px;
`;