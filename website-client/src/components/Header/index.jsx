import { NavLink } from 'react-router-dom'
import './styles.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__logo">
        <h1>SmileClinic</h1>
      </div>
      <nav className="site-header__nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Acasă
        </NavLink>
        <NavLink to="/despre-noi" className={({ isActive }) => isActive ? 'active' : ''}>
          Despre Noi
        </NavLink>
        <NavLink to="/servicii" className={({ isActive }) => isActive ? 'active' : ''}>
          Servicii &amp; Tarife
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}
