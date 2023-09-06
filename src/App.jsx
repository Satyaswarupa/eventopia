import React from 'react'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Home from './components/home/Home'
import Blogs from "./components/Blogs"
import Footer from './components/Footer'

import "./styles/App.scss"
import "./styles/Home.scss"
import "./styles/do.scss"
import "./styles/CardStyle.scss"
import "./styles/Footer.scss"
import "./styles/Header.scss"
import "./styles/WhyUs.scss"
import "./styles/Intro.scss"
import "./styles/Blogs.scss"
import "./styles/Contact.scss"
import "./styles/ourP.scss"
import BookNow from './components/BookNow'
import OurProduct from './components/OurProduct'


const App = () => {
  return (
    
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/ourProduct' element={<OurProduct />} />
      <Route path='/bookNow' element={<BookNow />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
