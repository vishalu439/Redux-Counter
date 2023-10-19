// reducers.js
import { createSlice } from '@reduxjs/toolkit';

// Create a slice for your restore action
const restoreSlice = createSlice({
  name: 'restore',
  initialState: null,
  reducers: {
    restoreState: (state, action) => {
      return action.payload; // Set the state to the restored data
    },
  },
});

// Export the action creator
export const { restoreState } = restoreSlice.actions;

// Create a reducer for the restore slice
export default restoreSlice.reducer;
