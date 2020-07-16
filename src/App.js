import React from "react"
import { Provider } from 'react-redux';
import { store } from './stores';
import styled from 'styled-components';

import { GlobalStyle } from "./style/GlobalStyle"
import Header from "./components/Header"
import SelectArea from "./components/SelectArea"
import Chart from "./components/Chart"

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
