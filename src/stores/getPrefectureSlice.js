import { createSlice } from "@reduxjs/toolkit"
import { getPrefectureApi } from "../api/getPrefectureApi"

const prefectureSlice = createSlice({
  name: "prefecture",
  initialState: { loading: false, error: null, items: [] },
  reducers: {
    // 通信を開始した時に呼ぶ関数
    fetchStart(state) {
      state.loading = true
      state.error = null
    },
    // 通信が失敗した時に呼ぶ関数
    fetchFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    // 通信が成功した時に呼ぶ関数
    fetchSuccess(state, action) {
      state.loading = false
      state.error = null
      state.items = action.payload
    },
  },
})

export const {
  fetchStart,
  fetchFailure,
  fetchSuccess,
} = prefectureSlice.actions

export const fetchPrefecture = () => async (dispatch) => {
  try {
    dispatch(fetchStart())
    dispatch(fetchSuccess(await getPrefectureApi()))
  } catch (error) {
    dispatch(fetchFailure(error.stack))
  }
}

export const selectPrefecture = ({ prefecture }) => prefecture;

export default prefectureSlice.reducer;