import { Link } from 'react-router-dom'
import './header.css'

export default function Header({ show, isLogged }) {

  function showLogin() {
    console.log(isLogged)
    show()
  }

  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>

      {!isLogged && (
        <div>
          <button className='btn-primary' onClick={showLogin}>
            Login
          </button>
        </div>
      )}
    </header>
  )
}