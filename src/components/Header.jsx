import React from "react"
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Title>人口</Title>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  box-shadow: 1px 1px 3px 1px #ddd;
  display: grid;
  height: 60px;
  margin: 0 auto 3.2rem;
  place-items: center;
  width: 100%;
`

const Title = styled.h1`
  color: #4ED0E1;
  font-size: 3.2rem;
`

export default Header