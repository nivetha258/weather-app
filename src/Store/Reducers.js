// reduxConfig.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  initialValues: {},
  location:"",
  apiData: [],
  selectedDay: 0,
  tabIndex: 0,
  units: 'metric',
};

const slice = createSlice({
  name: 'Weather',
  initialState,
  reducers: {
    setInitialValues: (state, action) => {
      state.initialValues = action.payload;
    },
    setLocation:(state,action)=>{
        state.location = action.payload
    },
    setAPIData: (state, action) => {
      state.apiData = action.payload;
    },
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
    setTabIndex: (state, action) => {
      state.tabIndex = action.payload;
    },
    setUnits: (state, action) => {
      state.units = action.payload;
    },
  },
});

export const { setInitialValues,setLocation, setAPIData, setSelectedDay, setTabIndex, setUnits } = slice.actions;
export default slice.reducer;
