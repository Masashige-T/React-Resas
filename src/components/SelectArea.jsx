import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"

import { selectPrefecture, fetchPrefecture } from "../stores/getPrefectureSlice"
import Checkbox from "./Checkbox"

const SelectArea = () => {
  const dispatch = useDispatch()
  const { loading, error, items } = useSelector(selectPrefecture)

  useEffect(() => {
    // fetchItemsを実行
    dispatch(fetchPrefecture())
  }, [dispatch])

  if (loading) return <p>...loading</p>
  if (error) return <p>{error}</p>

  return (
    <Wrapper>
      {items.map((item) => (
        <Checkbox
          id={item.prefCode}
          prefecture_name={item.prefName}
          key={item.prefCode}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 auto;
  width: 60%;
`

export default SelectArea
