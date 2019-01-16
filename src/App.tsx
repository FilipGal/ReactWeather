import React, { Component } from 'react'
import Weather from './components/Weather/Weather'
import { Dashboard } from './components/Layout/Dashboard'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Dashboard />
          <Weather />
        </header>
      </div>
    )
  }
}

export default App
