import React from "react"
import styled from "styled-components"
import { LineChart, ResponsiveContainer, XAxis, YAxis, Line } from "recharts"

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
]

const Chart = () => {
  return (
    <ResponsiveContainer width={800} height="80%">
      <StyledLineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line
          name="pv of pages"
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
        />
        <Line
          name="uv of pages"
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
        />
      </StyledLineChart>
    </ResponsiveContainer>
  )
}

const StyledLineChart = styled(LineChart)`
  margin: 30px auto;
`

export default Chart
