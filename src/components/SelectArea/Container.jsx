import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Presentational from "./Presentational"

import { getPrefectureFromRESAS } from "../../api/getPrefectureFromRESAS"
import { getPopulationFromRESAS } from "../../api/getPopulationFromRESAS"
import { removePopulation } from "../../stores/populationSlice"

const Container = () => {
  const dispatch = useDispatch()
  const { prefectures } = useSelector(state => state.prefecture)

  // classでのcomponentDisMountに相当
  useEffect(() => {
    dispatch(getPrefectureFromRESAS())
  }, [dispatch])

  // checkboxにチェックが入っていなければapiコール, 入っていれば選択された都道府県をstateから削除
  const handleOnChange = (prefCode, prefName) => {
    if (document.getElementById(prefCode).checked) {
      dispatch(getPopulationFromRESAS([prefCode, prefName]))
    } else {
      dispatch(removePopulation(prefName))
    }
  }

  const _props = { prefectures, handleOnChange }

  return <Presentational {..._props} />
}

export default Container
