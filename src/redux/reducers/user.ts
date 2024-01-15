import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageSourcePropType } from 'react-native/Libraries/Image/Image';

type UserState = {
  firstName: string;
  lastName: string;
  userId: number;
  profileImage: ImageSourcePropType;
};

const initialState: UserState = {
  firstName: 'Pablo',
  lastName: 'A',
  userId: 1,
  profileImage: require('../../../assets/images/header_profile_image.png'),
};

const slice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    updateFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const { updateFirstName, resetToInitialState } = slice.actions;

export default slice.reducer;
