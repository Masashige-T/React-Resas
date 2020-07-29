import React from "react"
import styled from "styled-components"
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
  Tooltip,
  Label,
  XAxis,
  YAxis,
  Line,
} from "recharts"

const Presentational = ({ data, prefectures, colors }) => {
  return (
    <Wrapper>
      <ResponsiveContainer>
        <StyledLineChart data={data}>
          <XAxis dataKey="year">
            <Label value="年度" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="人口" offset={0} angle={90} position="insideLeft" />
          </YAxis>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          {prefectures.map((pref, index) => (
            <Line
              name={pref}
              type="monotone"
              dataKey={pref}
              stroke={[colors[index]]}
              key={index}
            />
          ))}
        </StyledLineChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 500px;
  margin: 50px auto;
  padding: 0 160px;
  width: 100%;
`

const StyledLineChart = styled(LineChart)`
  margin: 5rem auto;
`

export default Presentational
