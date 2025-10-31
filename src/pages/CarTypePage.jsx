import { useParams, NavLink } from "react-router-dom";
import CarList from "../components/car-list/CarList";

const CarTypePage = ({carList}) => {
  const carsByType = Object.groupBy(carList, auto => auto.tipo);
  const carTypes = Object.keys(carsByType);
  const {type} = useParams()


  return (
    <div className="grid grid-cols-12 gap-6">
      <aside className="col-span-3">
        <nav className="header__nav"> 
          <ul>
            {carTypes.map(type => (
              <li key={type}>
                <NavLink to={`/type/${type.toLowerCase()}`} className={({ isActive }) => (isActive ? 'header__link header__link--active' : 'header__link')}>{type}</NavLink>
              </li>
            ))}
            
          </ul>
        </nav>
      </aside>
      <div className="col-span-9">

        <CarList carList={carList} carType={type}/>
      </div>
    </div>
  )
 
}
 
export default CarTypePage;