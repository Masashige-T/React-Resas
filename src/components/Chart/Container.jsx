import React from "react"
import { useSelector } from "react-redux"
import Presentational from "./Presentational"

const generatingRandomColor = () => {
  const r = ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2)
  const g = ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2)
  const b = ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2)
  const color = `#${r}${g}${b}`
  return color
}

// グラフに使用する47色の配列
const colors = [...Array(47).keys()].map(i => generatingRandomColor())

const Container = () => {
  const { data } = useSelector(state => state.population)
  // populationからグラフにする都道府県を配列にする
  const prefectures = Object.keys(data[0]).filter(v => v !== "year")

  const _props = { data, prefectures, colors }

  return <Presentational {..._props} />
}

export default Container
