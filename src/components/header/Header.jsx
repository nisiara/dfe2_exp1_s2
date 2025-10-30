import { NavLink } from "react-router-dom";
import "./Header.sass"
const Header = ({carList}) => {
  
  const carsByType = Object.groupBy(carList, auto => auto.tipo);
  const carTypes = Object.keys(carsByType);

  return (
    <header className="header">
      <h1 className="text-3xl font-bold">Automotora</h1>
      <nav className="header__nav"> 
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'header__link header__link--active' : 'header__link')}>Home</NavLink></li>
            {carTypes.map(type => (
              <li key={type}>
                <NavLink to={`/type/${type.toLowerCase()}`} className={({ isActive }) => (isActive ? 'header__link header__link--active' : 'header__link')}>{type}</NavLink>
              </li>
            ))}
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