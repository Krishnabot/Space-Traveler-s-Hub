import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_MISSION = 'missions/fetch_mission';
const fetchMissions = createAsyncThunk(FETCH_MISSION, async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  return response.data;
});

export default fetchMissions;
