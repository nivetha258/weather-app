// store.js
import { configureStore } from '@reduxjs/toolkit';
import weather from "./Reducers" 

const store = configureStore({
  reducer: {
    weather,
  },
});

export default store;
