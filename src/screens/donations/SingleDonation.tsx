import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { State } from '../../redux/store.ts';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamsList } from '../../navigation/MainNavigation.tsx';

type Props = { route: RouteProp<RootStackParamsList, 'SingleDonation'> };

const SingleDonation = ({ route }: Props) => {
  console.log('Params', route.params);
  const selectedDonationItem = useSelector(
    (state: State) => state.donations.selectedDonationItem,
  );
  return <Container></Container>;
};

const Container = styled.View``;

export default SingleDonation;
