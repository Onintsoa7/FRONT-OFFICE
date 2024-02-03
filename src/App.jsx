import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import Accueil from './pages/Accueil';

function App() {


  return (
    <>
      <Routes>
      <Route path='/' element={<Accueil/>} />
      </Routes>
    </>
  )
}

export default App
