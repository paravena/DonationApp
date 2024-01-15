import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DonationItem, donationsData } from '../../lib';

type DonationState = {
  items: DonationItem[];
  selectedDonationId: number | null;
};

const initialState: DonationState = {
  items: donationsData,
  selectedDonationId: null,
};

const donations = createSlice({
  name: 'donations',
  initialState,
  reducers: {
    resetDonations: () => initialState,
    updateSelectedDonationId: (state, action: PayloadAction<number>) => {
      state.selectedDonationId = action.payload;
    },
  },
});

export const { resetDonations, updateSelectedDonationId } = donations.actions;

export default donations.reducer;
