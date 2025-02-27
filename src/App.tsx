import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Carousel } from './Components/Carousel/Carousel'
import { ContentContainer } from './Components/MainContents/ContentContainer'

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { PromotedContent } from './Components/PromotedContent/PromotedContent'
import { Footer } from './Components/Footer/Footer'

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <div id="main" role="main">
        <Outlet />
      </div>
    </div>
  )
}

const Index = () => {
  return (
    <>
      <Carousel />
      <ContentContainer />
      <PromotedContent />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="*" element={<p>The link works!</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
