import React, { useState } from 'react';
import styled from 'styled-components/native';
import { BackButton, Button, Header, Input } from '../../components';
import { horizontalScale, verticalScale } from '../../lib';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../navigation/MainNavigation';

type Props = { navigation: StackNavigationProp<RootStackParamsList, 'Signup'> };
const Signup = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  return (
    <Container>
      <Top>
        <BackButton onPress={() => navigation.goBack()} />
      </Top>
      <Inner showsVerticalScrollIndicator={false}>
        <Header size={1}>Welcome and Welcome!</Header>
        <Input
          label="First & Last Name"
          placeholder="Enter your full name..."
          onChangeText={setFullName}
        />
        <Input
          label="Email"
          placeholder="Enter your email..."
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          label="Password"
          placeholder="******"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Button>Login</Button>
      </Inner>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;

const Inner = styled.ScrollView.attrs({
  contentContainerStyle: {
    marginHorizontal: horizontalScale(24),
    justifyContent: 'center',
    flex: 1,
    gap: verticalScale(24),
  },
})``;

const Top = styled.View`
  margin-top: ${verticalScale(7)}px;
  margin-left: ${horizontalScale(14)}px;
`;

export default Signup;
