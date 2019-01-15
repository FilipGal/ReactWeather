import * as React from 'react'

const Weather = () => {
  const [msg, setMsg] = React.useState<string>('')

  return (
    <div>
      <h1>Generic weather app incoming</h1>
      <button onClick={() => setMsg('Sure why not')}>Are you hyped?</button>
      <p>{msg}</p>
    </div>
  )
}

export default Weather
