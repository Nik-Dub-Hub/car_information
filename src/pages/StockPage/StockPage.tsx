import CarListItem from '../../widgets/CarListItem/CarListItem'
import {carsData} from'../../widgets/CarListItem/model/mocks/carsData'






export default function StockPage(){
    return (
      <>
        <h1>Склад</h1>
        <table>
          <thead>
            <tr>
              <th>Марка</th>
              <th>Модель</th>
              <th>Комплектация</th>
              <th>Склад</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {carsData.map((car, index) => (
                <CarListItem car={car} key={index}/>
            ))}
          </tbody>
        </table>
      </>
    );
}