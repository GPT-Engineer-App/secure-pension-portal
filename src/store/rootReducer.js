import { combineReducers } from '@reduxjs/toolkit';
import sampleSlice from './sampleSlice';

const rootReducer = combineReducers({
  sample: sampleSlice,
});

export default rootReducer;