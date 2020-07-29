import { createAsyncThunk } from "@reduxjs/toolkit"

const endPoint = "https://opendata.resas-portal.go.jp/api/v1/prefectures"

export const getPrefectureFromRESAS = createAsyncThunk(
  "prefecture/getPrefecture",
  async () => {
    const response = await fetch(endPoint, {
      headers: {
        "X-API-KEY": process.env.REACT_APP_RESAS_API_KEY,
      },
    })
    const json = await response.json()
    return json.result
  }
)
