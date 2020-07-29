import { configureStore } from "@reduxjs/toolkit"
import prefectureReducer from "./prefectureSlice"
import populationReducer from "./populationSlice"

export const store = configureStore({
  reducer: {
    prefecture: prefectureReducer,
    population: populationReducer,
  },
})
