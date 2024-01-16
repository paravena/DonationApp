import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { horizontalScale } from '../../lib';

type Props = {
  onPress: () => void;
};

const BackButton = ({ onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  background-color: #fafafa;
  width: ${horizontalScale(44)}px;
  height: ${horizontalScale(44)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${horizontalScale(26)}px;
`;

export default BackButton;
