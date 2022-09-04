import Mission from '../redux/Missions/Missions';
import Slice from '../redux/Rockets/Rockets';

describe('Testing The reducers Whether they retun initial STate or Not ', () => {
  it('Test the reducer for the mission if it  return empty array as initialState', () => {
    expect(Mission(undefined, {})).toEqual([]);
  });

  it('Test the  reducer for the rockets if it return empty array as initialState', () => {
    expect(Slice(undefined, {})).toEqual([]);
  });
});
