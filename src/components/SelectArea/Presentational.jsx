import React from "react"
import styled from "styled-components"

import Checkbox from "../parts/Checkbox"

const Presentational = ({ prefectures, handleOnChange }) => {
  return (
    <Wrapper>
      {prefectures.map(pref => (
        <Checkbox
          id={pref.prefCode}
          prefecture_name={pref.prefName}
          key={pref.prefCode}
          onChange={() => {
            handleOnChange(pref.prefCode, pref.prefName)
          }}
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

export default Presentational
