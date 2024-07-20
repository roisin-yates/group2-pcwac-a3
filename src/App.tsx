import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { CarouselImage } from './Components/Carousel/CarouselImage'

const App = () => {
  return (
    <div className="App">
      <Header />
      <CarouselImage
        title="Movie Title 1"
        description="Movie Description 1"
        subtitle="Movie Subtitle 1"
        url="images/default.jpg"
      />
    </div>
  )
}

export default App
