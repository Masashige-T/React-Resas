import React from "react"
import styled from "styled-components"

const Checkbox = props => {
  const { id, prefecture_name, onChange } = props
  return (
    <Wrapper>
      <Radio id={id} name="prefectures" type="checkbox" onChange={onChange} />
      <Label htmlFor={id}>{prefecture_name}</Label>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  display: block;
  margin: 0 auto;
  width: 100%;
`

// 実際に表示されているlabel
const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  font-size: 1.6rem;
  position: relative;
  transform: translateX(3.2rem);
  &::before {
    border: 1px solid #000;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -3.2rem;
    width: 1.6rem;
    height: 1.6rem;
  }
`

// form要素としてのinput 非表示
const Radio = styled.input`
  visibility: hidden;
  /* inputがチェックされた時のlabelのスタイルを定義 */
  &:checked + ${Label} {
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: -3.2rem;
      width: 1.6rem;
      height: 0.8rem;
      border-left: 2px solid #4ed0e1;
      border-bottom: 2px solid #4ed0e1;
      transform: rotate(-45deg);
    }
  }
`

export default Checkbox
