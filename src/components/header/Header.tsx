import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { scaleFontSize } from '../../lib';

type Props = PropsWithChildren<{
  size: number;
  color?: string;
  numberOfLines?: number;
}>;

const Header = ({
  children,
  size = 1,
  color = 'black',
  numberOfLines = undefined,
}: Props) => {
  return (
    <Container>
      <HeaderText size={size} color={color} numberOfLines={numberOfLines}>
        {children}
      </HeaderText>
    </Container>
  );
};

const Container = styled.View``;

const HeaderText = styled.Text<Pick<Props, 'size' | 'color'>>`
  font-family: Inter;
  font-size: ${({ size }) => scaleFontSize(24 - 5 * (size - 1))}px;
  line-height: ${({ size }) => scaleFontSize(29 - 7 * (size - 1))}px;
  font-weight: 600;
  color: ${({ color }) => color};
`;
export default Header;
