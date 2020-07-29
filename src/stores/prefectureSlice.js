import { createSlice } from "@reduxjs/toolkit"
import { getPrefectureFromRESAS } from "../api/getPrefectureFromRESAS"

const prefectureSlice = createSlice({
  name: "prefecture",
  initialState: { prefectures: [] },
  reducers: {},
  extraReducers: {
    [getPrefectureFromRESAS.fulfilled]: (state, action) => {
      state.prefectures = action.payload
    },
  },
})

export default prefectureSlice.reducer
