import { createAsyncThunk } from "@reduxjs/toolkit"

const endPoint =
  "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode="

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
