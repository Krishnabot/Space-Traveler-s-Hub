import { createSlice } from '@reduxjs/toolkit';
import fetchMissions from '../ConsumeAPI/FetchMission';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    joinMissions(state, action) {
      const newState = state.map((mission) => {
        if (mission.mission_id === action.payload.id) {
          return {
            ...mission,
            status: !mission.status,
          };
        }
        return {
          ...mission,
        };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => action.payload.map((mission) => ({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      more: mission.wikipedia,
      status: false,
    })));
  },
});

export const { joinMissions } = missionsSlice.actions;
export default missionsSlice.reducer;
