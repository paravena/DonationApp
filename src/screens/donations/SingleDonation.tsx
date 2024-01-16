import React from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { State } from '../../redux/store.ts';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamsList } from '../../navigation/MainNavigation.tsx';
import { BackButton, Badge, Button, Header } from '../../components';
import { StackNavigationProp } from '@react-navigation/stack';
import { horizontalScale, scaleFontSize, verticalScale } from '../../lib';

type Props = {
  route: RouteProp<RootStackParamsList, 'SingleDonation'>;
  navigation: StackNavigationProp<RootStackParamsList, 'SingleDonation'>;
};

const SingleDonation = ({ route, navigation }: Props) => {
  const { selectedCategory } = route.params;
  const selectedDonationItem = useSelector(
    (state: State) => state.donations.selectedDonationItem,
  );
  return (
    <Container>
      <Content showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => navigation.goBack()} />
        <DonationImage source={{ uri: selectedDonationItem?.image }} />
        <BadgeContent>
          <Badge>{selectedCategory?.name}</Badge>
        </BadgeContent>
        <Header size={1}>{selectedDonationItem?.name}</Header>
        <Description>{selectedDonationItem?.description}</Description>
      </Content>
      <BottomContent>
        <Button>Donate</Button>
      </BottomContent>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;
const Content = styled.ScrollView`
  margin: ${verticalScale(7)}px ${horizontalScale(20)}px 0;
`;

const DonationImage = styled.Image`
  margin-top: ${verticalScale(12)}px;
  margin-bottom: ${verticalScale(24)}px;
  width: 100%;
  height: ${verticalScale(240)}px;
  border-radius: ${horizontalScale(5)}px;
`;

const BadgeContent = styled.View`
  margin-bottom: ${verticalScale(16)}px;
`;

const Description = styled.Text`
  margin: ${verticalScale(7)}px ${horizontalScale(7)}px ${verticalScale(10)}px;
  font-family: Inter;
  font-weight: 400;
  font-size: ${scaleFontSize(14)}px;
`;

const BottomContent = styled.View`
  margin: 0 ${horizontalScale(20)}px;
`;

export default SingleDonation;
