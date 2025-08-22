import { getHeadFileds } from "../../features/filterGetFileds/filterGetFileds";
import CarListItem from "../../widgets/CarListItem/CarListItem";
import { carsData } from "../../widgets/CarListItem/model/mocks/carsData";
import { useEffect, useState } from "react";
import ModalFilterFildes from "../../widgets/ModalFilterFildes/ModalFilterFildes";

export default function StockPage() {
  const tableHeaderValues = [
    { keyValue: "marca", Values: "Марка" },
    { keyValue: "model", Values: "Модель" },
    { keyValue: "vehicleEquipment", Values: "Комплектация" },
    { keyValue: "stock", Values: "Склад" },
    { keyValue: "stockStatus", Values: "Статус" },
  ];

  const [currentCarArr, setCurrentCarArr] = useState(carsData);
  const [filterFields, setFilterFields] = useState([]);
  const [filterRun, setFilterRun] = useState(false)
  const [open, setOpen] = useState(
    tableHeaderValues.map((value) => ({ [value.keyValue]: false }))
  );

  function openCloseModal(itamValues, indexHeaderValues) {
    setOpen((prevOpen) =>
      prevOpen.map((nameHeadObj, indexHeadObj) => {
        if (indexHeaderValues === indexHeadObj) {
          return {
            ...nameHeadObj,
            [itamValues.keyValue]: !nameHeadObj[itamValues.keyValue],
          };
        }
        return nameHeadObj;
      })
    );
  }

  function filterClin(){
    setFilterRun(false);
    setCurrentCarArr(carsData);
  }

  useEffect(() => {
    setFilterFields(getHeadFileds(tableHeaderValues, carsData));
  }, [open]);

  return (
    <>
      <h1>Склад</h1>
      {filterRun && <button onClick={filterClin}> Сбросить фильты </button>}
      <table>
        <thead>
          <tr>
            {tableHeaderValues.map((itamValues, indexHeaderValues) => (
              <th>
                {itamValues.Values}
                <button
                  onClick={() => openCloseModal(itamValues, indexHeaderValues)}
                >
                  +
                </button>
                {open[indexHeaderValues][itamValues.keyValue] && (
                  <ModalFilterFildes
                    filterFields={filterFields}
                    indexHeaderValues={indexHeaderValues}
                    itamValues={itamValues}
                    openCloseModal={openCloseModal}
                    setCurrentCarArr={setCurrentCarArr}
                    carsData={carsData}
                    setFilterRun={setFilterRun}
                    filterRun={filterRun}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentCarArr.map((car, index) => (
            <CarListItem car={car} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
}
