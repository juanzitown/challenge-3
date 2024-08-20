import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import FarmType from '../types/farm-type';

type SliceProps = {
  list: FarmType[];
};

const initialState: SliceProps = {
  list: [],
};

export const farmsSlice = createSlice({
  name: 'farms',
  initialState,
  reducers: {
    newFarm: (state, action: PayloadAction<Partial<FarmType>>) => {
      const farm = {
        ...action.payload,
        id: new Date().getTime(),
      } as FarmType;
      state.list.push(farm);
    },
    updateFarm: (state, action: PayloadAction<Partial<FarmType>>) => {
      const oldFarm = state.list.find((farm) => farm.id === action.payload.id);
      const updatedFarm = {
        ...oldFarm,
        ...action.payload,
        id: action.payload.id,
      } as FarmType;

      let list = state.list.filter((farm) => farm.id !== action.payload.id);
      list = [...list, updatedFarm];
      state.list = list;
    },
    deleteFarm: (state, action: PayloadAction<FarmType['id']>) => {
      const farmId = action.payload;
      state.list = state.list.filter((farm) => farm.id !== farmId);
    },
  },
});

export const { newFarm, updateFarm, deleteFarm } = farmsSlice.actions;
export default farmsSlice.reducer;
