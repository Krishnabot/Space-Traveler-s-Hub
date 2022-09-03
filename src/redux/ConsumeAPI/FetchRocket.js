import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKET = 'rockets/fetch_rocket';
const fetchRockets = createAsyncThunk(FETCH_ROCKET, async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  return response.data;
});

export default fetchRockets;
