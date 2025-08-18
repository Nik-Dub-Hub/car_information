import CarListItem from '../../widgets/CarListItem/CarListItem'
import {carsData} from'../../widgets/CarListItem/model/mocks/carsData'
import { useEffect, useState } from 'react';





export default function StockPage(){
  const [filterFields, setFilterFields] = useState([]);
  const [open, setOpen] = useState(false);

  const getFileds = (nameFiled,carsData) =>{
    const filtered = [];
    const check = {};
    if (Array.isArray(carsData) && carsData.length !== 0) {
      for (let i = 0; i <= carsData.length - 1; i++) {
        const valueFiledLower = carsData[i][nameFiled].toLowerCase();
        if (!check[valueFiledLower]) {
          check[valueFiledLower] = true;
          filtered.push(carsData[i][nameFiled]);
        }
      }
      return filtered;
    } else return null;
  }




  useEffect(()=>{
    setFilterFields(
      [
        getFileds("marca", carsData),
        getFileds("model", carsData),
        getFileds("vehicleEquipment", carsData),
        getFileds("stock", carsData),
        getFileds("stockStatus", carsData),
      ],
    );
  },[open])


  function openFilterToSelect() {}

  return (
    <>
      <h1>Склад</h1>
      <table>
        <thead>
          <tr>
            <th>
              Марка<button onClick={() => setOpen(!open)}>+</button>
              {open && (
                <ul>
                  {filterFields[0].map((fileldArr, index) => (
                    <li key={index}>{fileldArr}</li>
                  ))}
                </ul>
              )}
            </th>
            <th>
              Модель<button onClick={() => setOpen(!open)}>+</button>
              {open && (
                <ul>
                  {filterFields[1].map((fileldArr, index) => (
                    <li key={index}>{fileldArr}</li>
                  ))}
                </ul>
              )}
            </th>
            <th>
              Комплектация<button onClick={() => setOpen(!open)}>+</button>
              {open && (
                <ul>
                  {filterFields[2].map((fileldArr, index) => (
                    <li key={index}>{fileldArr}</li>
                  ))}
                </ul>
              )}
            </th>
            <th>
              Склад<button onClick={() => setOpen(!open)}>+</button>
              {open && (
                <ul>
                  {filterFields[3].map((fileldArr, index) => (
                    <li key={index}>{fileldArr}</li>
                  ))}
                </ul>
              )}
            </th>
            <th>
              Статус<button onClick={() => setOpen(!open)}>+</button>
              {open && (
                <ul>
                  {filterFields[4].map((fileldArr, index) => (
                    <li key={index}>{fileldArr}</li>
                  ))}
                </ul>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {carsData.map((car, index) => (
            <CarListItem car={car} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
}