import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Header from './pages/header'
import { useState, useEffect } from 'react'
import Login from './pages/home/components/login'

function App() {
  const [isLogged, setLogged] = useState(false)
  const [showLogin, setShowLogin] = useState(false)


    useEffect(() => {
    const token = localStorage.getItem('token') || false
    if (token) {
      setLogged(true)
    }
  }, [])

  return (
    <>
      <Header show={() => setShowLogin(true)} isLogged={isLogged} />

      <main>
        <Login  show={showLogin}  onLoginSuccess={() => { setLogged(true); setShowLogin(false); }} onClose={() => setShowLogin(false)} />
        <Routes>
          <Route path='/' element={<Home isLogged={isLogged} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App
