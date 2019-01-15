import * as React from 'react'

export function useLocation(): Array<any> {
  const [loc, useLocation] = React.useState<any>(0)
  navigator.geolocation.getCurrentPosition((pos: Position) => {
    const { latitude, longitude } = pos.coords
    useLocation([{ lat: latitude, lon: longitude }])
  })
  return Array.from(loc)
}
