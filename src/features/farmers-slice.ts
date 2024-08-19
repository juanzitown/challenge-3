import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import FarmerType from '../types/farmer-type';

type SliceProps = {
  list: FarmerType[];
};

const initialState: SliceProps = {
  list: [],
};

export const farmersSlice = createSlice({
  name: 'farmers',
  initialState,
  reducers: {
    newFarmer: (state, action: PayloadAction<Partial<FarmerType>>) => {
      const farmer = {
        ...action.payload,
        id: new Date().getTime(),
      } as FarmerType;
      state.list.push(farmer);
    },
  },
});

export const { newFarmer } = farmersSlice.actions;
export default farmersSlice.reducer;
