import React, { Component } from 'react'
import Weather from './components/Weather/Weather'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Weather />
        </header>
      </div>
    )
  }
}

export default App
