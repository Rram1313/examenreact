import * as React from "react"
import { Link } from "gatsby"
import "./menu.css"

const Menu = () => {
  return (
  <nav className="nav">
      <ul className="ul">
        <li className="li">
          <Link to="/" className="a">Inicio</Link>
        </li>
        <li className="li">
          <Link to="/contacto" className="a">Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu