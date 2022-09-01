import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/Missions';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
