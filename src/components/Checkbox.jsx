import React from "react"
import styled from "styled-components"

const Checkbox = (props) => {
  return (
    <>
      <Radio id={props.id} name="prefectures" type="radio" />
      <Label htmlFor={props.id}>{props.text}</Label>
    </>
  )
}

const Label = styled.label`
  display: inline-block;
  font-size: 1.6rem;
  padding: 1rem;
  position: relative;
  &::before {
    border: 1px solid #000;
    content: "";
    display: block;
    position: absolute;
    top: 1rem;
    left: -1.6rem;
    width: 1.6rem;
    height: 1.6rem;
  }
`

const Radio = styled.input`
  visibility: hidden;
  &:checked + ${Label} {
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 1rem;
      left: -1.6rem;
      width: 1.6rem;
      height: .8rem;
      border-left: 2px solid #4ED0E1;
      border-bottom: 2px solid #4ED0E1;
      transform: rotate(-45deg);
    }
  }
`

export default Checkbox
