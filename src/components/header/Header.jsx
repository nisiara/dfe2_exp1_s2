import { NavLink } from "react-router-dom";
import "./Header.sass"
const Header = () => {
  
  return (
    <header className="header mb-10">
      <h1 className="text-3xl font-bold">Automotora</h1>
      <nav className="header__nav"> 
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'header__link header__link--active' : 'header__link')}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/car-list" className={({ isActive }) => (isActive ? 'header__link header__link--active' : 'header__link')}>Car List</NavLink>
          </li>
          <li>
            <NavLink to="/add-car" className={({ isActive }) => (isActive ? 'header__link header__link--active' : 'header__link')}>Add Car</NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'header__link header__link--active' : 'header__link')}>About us</NavLink>
          </li>
        </ul>
      </nav>
     </header>
  )
}
 
export default Header;