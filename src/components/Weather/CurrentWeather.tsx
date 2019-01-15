import * as React from 'react'
import axios, { AxiosResponse } from 'axios'
import { useLocation } from '../helpers/GetUserLocation'

const url = `http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=${
  process.env.REACT_APP_API_KEY
}&units=metric`

function useWeather(): any {
  const [weather, useWeather] = React.useState<object | null>(null)
  React.useEffect(() => {
    axios
      .get(url)
      .then((res: AxiosResponse) => useWeather(res.data))
      .catch(err => console.log(err))
  }, [])
  return weather
}

function getCurrentWeather(): JSX.Element {
  const weather = useWeather()
  return <div>{weather === null ? 'Loading...' : renderValues(weather)}</div>
}

function renderValues(weather: any): JSX.Element {
  useLocation().map((x: any) => console.log(x))
  return (
    <div>
      <p>{weather.main.temp}</p>
    </div>
  )
}

export default getCurrentWeather
