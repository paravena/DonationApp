import React, { PropsWithChildren, useMemo, useState } from 'react';
import styled from 'styled-components/native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../lib';

type Props = PropsWithChildren<{}>;

const Badge = ({ children }: Props) => {
  const [width, setWidth] = useState(0);
  const tabWidth = useMemo(() => horizontalScale(width + 20), [width]);
  return (
    <Container style={{ width: tabWidth }}>
      <Title onTextLayout={event => setWidth(event.nativeEvent.lines[0].width)}>
        {children}
      </Title>
    </Container>
  );
};

const Container = styled.View`
  background-color: #145855;
  height: ${verticalScale(22)}px;
  justify-content: center;
  border-radius: ${horizontalScale(50)}px;
`;
const Title = styled.Text`
  font-family: Inter;
  font-size: ${scaleFontSize(10)}px;
  font-weight: 600;
  line-height: ${scaleFontSize(12)}px;
  color: white;
  text-align: center;
`;

export default Badge;
