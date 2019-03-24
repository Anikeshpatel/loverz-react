import React, { Component } from 'react'
import './App.css'

import Header from './ui/Header/Header'
import ListView from './ui/ListView/ListView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ListView/>
      </div>
    )
  }
}

export default App
