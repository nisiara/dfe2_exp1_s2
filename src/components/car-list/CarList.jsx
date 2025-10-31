import "./CarList.sass"

const CarList = ({carList, carType}) => {
  const filteredCars = carType 
    ? carList.filter(car => car.tipo.toLowerCase() === carType.toLowerCase())
    : carList;

  return ( 
    <div className="car-list">
      {filteredCars.length > 0 ? (
        filteredCars.map(car => (
          <article key={car.id} className="car-list__car">
            <h3 className="car-list__car__brand">{car.marca}</h3>
            <h6 className="car-list__car__model">{car.modelo}</h6>
            <span className="car-list__car__type">{car.tipo}</span>
          </article>
        ))
      ) : (
        <p>No se encontraron autos de tipo "{carType}"</p>
      )}
    </div>

  );
}
 
export default CarList;