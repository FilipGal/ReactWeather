import * as React from 'react'
import styled from 'styled-components'

import CurrentWeather from './CurrentWeather'

const Div = styled.div`
  background: grey;
  color: white;
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 1px white;
  }
`

export function WeatherContainer(): JSX.Element {
  return (
    <Div>
      <CurrentWeather />
    </Div>
  )
}
