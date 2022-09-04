import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/Missions';
import rocketsReducer from './Rockets/Rockets';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;
