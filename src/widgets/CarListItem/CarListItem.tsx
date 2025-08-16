import './CarListItem.css'

export default function CarListItem({car}){
    return (
      <tr className="car-container">
        <td>{car.marca}</td>
        <td>{car.model}</td>
        <td>{car.vehicleEquipment}</td>
        <td>{car.stock}</td>
        <td>{car.status}</td>
      </tr>
    );
}