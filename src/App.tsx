import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Carousel } from './Components/Carousel/Carousel'
import { ContentContainer } from './Components/MainContents/ContentContainer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div id="main" role="main">
        <Carousel />
        <ContentContainer />
      </div>
    </div>
  )
}

export default App
