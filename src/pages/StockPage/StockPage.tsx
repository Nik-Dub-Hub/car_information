import getFileds from "../../features/filter/filter";
import CarListItem from "../../widgets/CarListItem/CarListItem";
import { carsData } from "../../widgets/CarListItem/model/mocks/carsData";
import { useEffect, useState } from "react";

export default function StockPage() {
  const tableHeaderValues = [
    { keyValue: "marca", Values: "Марка" },
    { keyValue: "model", Values: "Модель" },
    { keyValue: "vehicleEquipment", Values: "Комплектация" },
    { keyValue: "stock", Values: "Склад" },
    { keyValue: "stockStatus", Values: "Статус" },
  ];
  const [filterFields, setFilterFields] = useState([]);
  const [open, setOpen] = useState(
    tableHeaderValues.map((value) => ({ [value.keyValue]: false }))
  );

  useEffect(() => {
    setFilterFields(getFileds(tableHeaderValues, carsData));
  }, [open]);


  return (
    <>
      <h1>Склад</h1>
      <table>
        <thead>
          <tr>
            {tableHeaderValues.map((itamValues, indexHeaderValues) => (
              <th>
                {itamValues.Values}
                <button
                  onClick={() =>
                    setOpen(
                      open.map((nameHeadObj, indexHeadObj) => {
                        if (indexHeaderValues === indexHeadObj) {
                          return {
                            ...nameHeadObj,
                            [itamValues.keyValue]:
                              !nameHeadObj[itamValues.keyValue],
                          };
                        }
                        return nameHeadObj;
                      })
                    )
                  }
                >
                  +
                </button>
                {open[indexHeaderValues][itamValues.keyValue] && (
                  <ul>
                    {filterFields[indexHeaderValues].map((fileldArr, index) => (
                      <li key={index}>{fileldArr}</li>
                    ))}
                  </ul>
                )}
              </th>
            ))}
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
