import React from "react"

import { GlobalStyle } from "./style/GlobalStyle"
import Checkbox from "./components/Checkbox"

const prefectures = [
  {
    id: "tokyo",
    name: "東京",
  },
  {
    id: "osaka",
    name: "大阪",
  },
]

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Hello Resas</h1>
      {prefectures.map(prefecture => (
        <Checkbox id={prefecture.id} text={prefecture.name} />
      ))}
    </>
  )
}

export default App
