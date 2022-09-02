import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from '../ConsumeAPI/FetchRocket';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    joinRockets(state, action) {
      const newState = state.map((rocket) => {
        if (rocket.id === action.payload.id) {
          return {
            ...rocket,
            status: !rocket.status,
          };
        }
        return {
          ...rocket,
        };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => action.payload.map((rocket) => ({
      flikr_images: rocket.flikr_images[0],
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      more: rocket.wikipedia,
      status: false,
    })));
  },
});

export const { joinRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
