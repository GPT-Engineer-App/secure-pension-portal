import { combineReducers } from '@reduxjs/toolkit';
import sampleSlice from './sampleSlice';
import authSlice from './authSlice'; // Import the authSlice

const rootReducer = combineReducers({
  sample: sampleSlice,
auth: authSlice, // Add authSlice to the rootReducer
});

export default rootReducer;