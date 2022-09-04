import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from '../ConsumeAPI/FetchRocket';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    joinRockets(state, action) {
      const newState = state.map((rocket) => {
        if (rocket.id === action.payload.rocket.id) {
          return {
            ...rocket,
            result: !rocket.result,
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
      id: rocket.rocket_id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
      more: rocket.wikipedia,
      result: false,
    })));
  },
});

export const { joinRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
