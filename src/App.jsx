import { useState } from 'react'
import { DarkModeProvider } from './Componets/DarkModeContext'
import Header from './Section/Header'
import Home from './Section/Home'
import Footer from './Section/Footer'
import Services from './Section/Services'
import About from './Section/About'
import Contact from './Section/Contact'
function App() {


  return (
    <>
    <DarkModeProvider>
      <Header></Header>
      <Home>
      </Home>
     <About></About>
     <Services></Services>
     <Contact></Contact>
      <Footer></Footer>
    </DarkModeProvider>
    </>
  )
}

export default App
