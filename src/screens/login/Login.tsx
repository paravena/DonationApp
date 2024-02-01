import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Button, Header, Input } from '../../components';
import { horizontalScale, verticalScale } from '../../lib';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../navigation/MainNavigation';

type Props = { navigation: StackNavigationProp<RootStackParamsList, 'Login'> };
const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <Inner showsVerticalScrollIndicator={false}>
        <Header size={1}>Welcome Back</Header>
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
        <RegistrationButton onPress={() => navigation.navigate('Signup')}>
          <Header size={3} color="#156cf7">
            Don't have an account?
          </Header>
        </RegistrationButton>
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

const RegistrationButton = styled.TouchableOpacity`
  align-items: center;
`;

export default Login;
