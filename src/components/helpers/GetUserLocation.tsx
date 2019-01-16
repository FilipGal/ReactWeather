import * as React from 'react'

function useLocation(): Array<any> {
  const [loc, useLocation] = React.useState<any>(0)
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos: Position) => {
      const { latitude, longitude } = pos.coords
      useLocation([{ lat: latitude, lon: longitude }])
    })
  }, [])
  return Array.from(loc)
}

export function getUserLocation(): string {
  let url = ''
  try {
    useLocation().map(loc => {
      url = apiUrl(loc.lat, loc.lon)
    })
  } catch (err) {
    console.log(err)
  }
  return url
}

function apiUrl(lat: number, lon: number): string {
  return `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${
    process.env.REACT_APP_API_KEY
  }&units=metric`
}
