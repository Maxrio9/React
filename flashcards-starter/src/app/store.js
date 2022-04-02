import { configureStore } from "@reduxjs/toolkit";
import reducer from '../features/topics/topicsSlice';

export default configureStore({
  reducer: {},
  topics: reducer;
});
