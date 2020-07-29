import { createAsyncThunk } from "@reduxjs/toolkit"

const endPoint =
  "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode="

// 引数に渡された都道府県から人口構成を取得
export const getPopulationFromRESAS = createAsyncThunk(
  "population/getPopulation",
  async ([prefCode, prefName]) => {
    const response = await fetch(`${endPoint}${prefCode}`, {
      headers: {
        "X-API-KEY": process.env.REACT_APP_RESAS_API_KEY,
      },
    })
    const json = await response.json()
    return {
      data: json.result.data[0].data,
      name: prefName,
    }
  }
)
