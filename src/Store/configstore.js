// store.js
import { configureStore } from '@reduxjs/toolkit';
import weather from "./reducers"

const store = configureStore({
  reducer: {
    weather,
  },
});

export default store;
