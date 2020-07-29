import { createSlice } from "@reduxjs/toolkit"
import { getPopulationFromRESAS } from "../api/getPopulationFromRESAS"

const populationSlice = createSlice({
  name: "population",
  initialState: { data: [{ year: "", value: "" }] },
  reducers: {
    removePopulation: (state, action) => {
      // action.payloadに入ってる都道府県のプロパティを削除したstateを返す
      const copyState = JSON.parse(JSON.stringify(state.data))
      const filteredState = copyState.map(v => {
        delete v[action.payload]
        return { ...v }
      })
      state.data = filteredState
    },
  },
  extraReducers: {
    [getPopulationFromRESAS.fulfilled]: (state, action) => {
      // 初回呼び出しなら{ year: year 都道府県名: value } ２回目以降は現在の値を展開してから 都道府県名: valueを追加
      const currentState = state.data[0].value
      const mappedPayload =
        currentState !== ""
          ? action.payload.data.map((v, index) => ({
              ...state.data[index],
              [action.payload.name]: v.value,
            }))
          : action.payload.data.map(v => ({
              year: v.year,
              [action.payload.name]: v.value,
            }))
      state.data = mappedPayload
    },
  },
})

export const { removePopulation } = populationSlice.actions

export default populationSlice.reducer
