import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Carousel } from './Components/Carousel/Carousel'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div id="main" role="main">
        <Carousel />
      </div>
    </div>
  )
}

export default App
