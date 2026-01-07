import { useEffect, useState } from "react"

export default function Login({ onLoginSuccess, show, onClose }) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    if (name === 'user' && password === '123') {
      localStorage.setItem('token', 'fake-jwt-token') 

      if (onLoginSuccess) onLoginSuccess()
    }

    setTimeout(() => {
        localStorage.removeItem('token')
    }, 10 * 60 * 1000)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && show) onClose()
      if (e.key === 'Enter' && show) handleLogin()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [show])


    return (
        <div style={{ display: show ? 'block' : 'none' }} className="fondoLogin" >
            <div className="LoginContent" >
                <button className="closeBtn" onClick={onClose} aria-label="Cerrar">×</button>
                <h2>Login</h2>
                <label>Name: </label> <br />
                <input type="text" placeholder="Name..." onChange={e => setName(e.target.value)} /><br />
                <label>Password: </label> <br />
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br />
                <button className="btn-primary" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}