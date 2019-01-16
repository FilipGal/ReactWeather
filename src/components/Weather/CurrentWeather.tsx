import * as React from 'react'
import axios, { AxiosResponse } from 'axios'
import { getUserLocation } from '../helpers/GetUserLocation'

function useWeather(): object | null {
  const loc = getUserLocation()
  const [weather, useWeather] = React.useState<object | null>(null)
  if (loc) {
    React.useEffect(() => {
      axios
        .get(loc)
        .then((res: AxiosResponse) => useWeather(res.data))
        .catch(err => console.log(err))
    }, [])
  }
  return weather
}

function getCurrentWeather(): JSX.Element {
  const weather = useWeather()
  return <div>{weather === null ? 'Loading...' : renderValues(weather)}</div>
}

function renderValues(weather: any): JSX.Element {
  return (
    <div>
      <p>
        Weather for <b>{weather.name}</b>
      </p>
      <p>{weather.main.temp} degrees celcius</p>
    </div>
  )
}

export default getCurrentWeather
