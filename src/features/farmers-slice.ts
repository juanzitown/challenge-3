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
    updateFarmer: (state, action: PayloadAction<Partial<FarmerType>>) => {
      const oldFarmer = state.list.find(
        (farmer) => farmer.id === action.payload.id
      );
      const updatedFarmer = {
        ...oldFarmer,
        ...action.payload,
        id: action.payload.id,
      } as FarmerType;

      let list = state.list.filter((farmer) => farmer.id !== action.payload.id);
      list = [...list, updatedFarmer];
      state.list = list;
    },
    deleteFarmer: (state, action: PayloadAction<FarmerType['id']>) => {
      const farmerId = action.payload;
      state.list = state.list.filter((farmer) => farmer.id !== farmerId);
    },
  },
});

export const { newFarmer, updateFarmer, deleteFarmer } = farmersSlice.actions;
export default farmersSlice.reducer;
