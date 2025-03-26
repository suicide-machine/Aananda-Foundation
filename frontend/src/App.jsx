import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./navbar/Navbar"
import Footer from "./navbar/Footer"
import AboutUs from "./pages/AboutUs"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
