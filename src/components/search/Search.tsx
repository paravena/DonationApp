import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { horizontalScale, scaleFontSize, verticalScale } from '../../lib';

type Props = {
  onSearch?: (value: string) => void;
  placeholder?: string;
};
const Search = ({ onSearch = () => {}, placeholder = 'Search' }: Props) => {
  return (
    <Container>
      <FontAwesomeIcon
        icon={faSearch}
        color="#25c0ff"
        size={scaleFontSize(22)}
      />
      <Input onChangeText={onSearch} placeholder={placeholder} />
    </Container>
  );
};

const Container = styled.Pressable`
  flex-direction: row;
  padding: 0 ${horizontalScale(16)}px;
  background-color: #f3f5f9;
  height: ${verticalScale(50)}px;
  align-items: center;
  border-radius: ${horizontalScale(15)}px;
`;
const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  margin-left: ${horizontalScale(6)}px;
  font-family: Inter;
  font-size: ${scaleFontSize(14)}px;
  line-height: ${scaleFontSize(14)}px;
  color: #686c7a;
`;

export default Search;
