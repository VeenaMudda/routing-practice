// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-image"
      />
      <h1 className="heading">Wave</h1>
    </div>

    <ul className="menu">
      <li>
        <Link className="item" to="/">
          Home
        </Link>
      </li>

      <li>
        <Link className="item" to="/about">
          About
        </Link>
      </li>

      <li>
        <Link className="item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
