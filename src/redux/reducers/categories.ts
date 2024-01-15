import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categoriesData } from '../../lib';

const initialState = {
  categories: categoriesData,
  selectedCategoryId: 1,
};

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    resetCategories: () => initialState,
    updateSelectedCategoryId: (state, action: PayloadAction<number>) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const { resetCategories, updateSelectedCategoryId } = categories.actions;
export default categories.reducer;
