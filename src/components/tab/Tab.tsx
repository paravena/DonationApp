import React, { PropsWithChildren, useMemo, useState } from 'react';
import styled from 'styled-components/native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../lib';

type Props = PropsWithChildren<{
  tabId: number;
  isInactive?: boolean;
  onPress?: (tabId: number) => void;
}>;

const Tab = ({
  children,
  onPress = (_tabId: number) => {},
  isInactive = false,
  tabId,
}: Props) => {
  const [width, setWidth] = useState(0);
  const tabWidth = useMemo(() => horizontalScale(width + 66), [width]);
  return (
    <Container
      isInactive={isInactive}
      onPress={() => onPress(tabId)}
      style={{ width: tabWidth }}>
      <Title
        isInactive={isInactive}
        onTextLayout={event => setWidth(event.nativeEvent.lines[0].width)}>
        {children}
      </Title>
    </Container>
  );
};

const Container = styled.Pressable<Pick<Props, 'isInactive'>>`
  background-color: ${({ isInactive }) => (isInactive ? '#f3f5f9' : '#2979f2')};
  height: ${verticalScale(50)}px;
  justify-content: center;
  border-radius: ${horizontalScale(50)}px;
`;
const Title = styled.Text<Pick<Props, 'isInactive'>>`
  font-family: Inter;
  font-size: ${scaleFontSize(14)}px;
  font-weight: 500;
  line-height: ${scaleFontSize(17)}px;
  color: ${({ isInactive }) => (isInactive ? '#79869f' : 'white')};
  text-align: center;
`;

export default Tab;
