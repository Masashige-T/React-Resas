import { configureStore } from '@reduxjs/toolkit';
import prefectureReducer from "./getPrefectureSlice"

export const store = configureStore({
  reducer: {
    prefecture: prefectureReducer,
  }
})