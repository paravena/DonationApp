import React from 'react';
import Badge from '../badge/Badge';
import Header from '../header/Header';
import styled from 'styled-components/native';
import { ImageSourcePropType } from 'react-native';
import { horizontalScale, verticalScale } from '../../lib';

type Props = {
  uri: ImageSourcePropType;
  badgeTitle: string;
  title: string;
  price: number;
};
const DonationItem = ({ uri, badgeTitle, title, price }: Props) => {
  return (
    <Container>
      <ImageContent>
        <BadgeContainer>
          <Badge>{badgeTitle}</Badge>
        </BadgeContainer>
        <ItemImage resizeMode={'contain'} source={uri} />
      </ImageContent>
      <BottomContainer>
        <Header size={3} color="#0a043c">
          {title}
        </Header>
        <Header size={3} color="#156cf7">
          {'$' + price.toFixed(2)}
        </Header>
      </BottomContainer>
    </Container>
  );
};

const Container = styled.View``;
const ImageContent = styled.View``;
const ItemImage = styled.Image`
  width: ${horizontalScale(155)}px;
  height: ${verticalScale(170)}px;
`;
const BadgeContainer = styled.View`
  position: absolute;
  z-index: 1;
  top: ${verticalScale(13)}px;
  left: ${horizontalScale(10)}px;
`;
const BottomContainer = styled.View`
  margin-top: ${verticalScale(16)}px;
  gap: ${verticalScale(5)}px;
`;

export default DonationItem;
