import React from "react"
import { Provider } from "react-redux"
import { store } from "./stores"

import { GlobalStyle } from "./style/GlobalStyle"
import Header from "./components/parts/Header"
import SelectArea from "./components/SelectArea/Container"
import Chart from "./components/Chart/Container"

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <SelectArea />
      <Chart />
    </Provider>
  )
}

export default App
