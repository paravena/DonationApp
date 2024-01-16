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
  donationItemId: number;
  onPress: (donationItemId: number) => void;
};
const SingleDonationItem = ({
  uri,
  badgeTitle,
  title,
  price,
  donationItemId,
  onPress,
}: Props) => {
  return (
    <Container onPress={() => onPress(donationItemId)}>
      <InnerContainer>
        <ImageContent>
          <BadgeContainer>
            <Badge>{badgeTitle}</Badge>
          </BadgeContainer>
          <ItemImage resizeMode={'cover'} source={uri} />
        </ImageContent>
        <BottomContainer>
          <Header size={3} color="#0a043c" numberOfLines={1}>
            {title}
          </Header>
          <Header size={3} color="#156cf7">
            {'$' + price.toFixed(2)}
          </Header>
        </BottomContainer>
      </InnerContainer>
    </Container>
  );
};
const Container = styled.Pressable``;
const InnerContainer = styled.View``;
const ImageContent = styled.View``;
const ItemImage = styled.Image`
  width: ${horizontalScale(140)}px;
  height: ${verticalScale(170)}px;
  border-radius: ${horizontalScale(20)}px;
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

export default SingleDonationItem;
