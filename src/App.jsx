import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Page/Login'
import {Routes, Route} from 'react-router-dom'
import Accueil from './Page/Accueil'
import Profil from './Page/Profil'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/profil' element={<Profil/>}/>
      </Routes>
    </>
  )
}

export default App
