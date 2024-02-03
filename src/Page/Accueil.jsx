import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Content from '../Component/Content'
import Preloader from '../Component/Preloader'
function Accueil() {
  return (
    <div>
      <Preloader />
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Accueil