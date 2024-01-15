import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../lib';

type Props = PropsWithChildren<{
  isDisabled?: boolean;
  onPress?: () => void;
}>;

const Button = ({
  children,
  onPress = () => {},
  isDisabled = false,
}: Props) => {
  return (
    <Container disabled={isDisabled} isDisabled={isDisabled} onPress={onPress}>
      <Title>{children}</Title>
    </Container>
  );
};

const Container = styled.Pressable<Pick<Props, 'isDisabled'>>`
  background-color: #2979f2;
  height: ${verticalScale(55)}px;
  justify-content: center;
  border-radius: ${horizontalScale(50)}px;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
`;
const Title = styled.Text`
  font-family: Inter;
  font-size: ${scaleFontSize(16)}px;
  font-weight: 500;
  line-height: ${scaleFontSize(19)}px;
  color: white;
  text-align: center;
`;

export default Button;
