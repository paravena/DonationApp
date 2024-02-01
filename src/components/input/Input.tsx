import React, { useState } from 'react';
import styled from 'styled-components/native';
import { scaleFontSize, verticalScale } from '../../lib';
import { KeyboardTypeOptions } from 'react-native';

type Props = {
  label: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
};
const Input = ({
  label,
  placeholder,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
}: Props) => {
  const [value, setValue] = useState('');
  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <TextInput
        value={value}
        onChangeText={text => {
          setValue(text);
          onChangeText(text);
        }}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </Container>
  );
};

const Container = styled.View``;
const TextLabel = styled.Text`
  font-family: Inter;
  font-weight: 400;
  font-size: ${scaleFontSize(12)}px;
  line-height: ${scaleFontSize(15)}px;
  color: #36455a;
`;
const TextInput = styled.TextInput`
  padding: ${verticalScale(12)}px 0;
  border-bottom-width: 1px;
  border-bottom-color: rgba(167, 167, 167, 0.5);
`;

export default Input;
