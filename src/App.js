import React, { Component } from 'react'
import './App.css'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import Header from './ui/Header/Header'
import ListView from './ui/ListView/ListView'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="App">
          <Header/>
          <ListView/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
