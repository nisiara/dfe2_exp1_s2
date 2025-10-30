import { useParams } from "react-router-dom";
import CarList from "../components/car-list/CarList";

const CarTypePage = ({carList}) => {
  const {type} = useParams()

  return <CarList carList={carList}carType={type}/>
 
}
 
export default CarTypePage;