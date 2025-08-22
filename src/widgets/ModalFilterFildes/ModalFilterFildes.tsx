import { useState } from "react";
import "./ModalFilterFildes.css";
import { filterAllTables } from "../../features/filterGetFileds/filterGetFileds";

export default function ModalFilterFildes({
  filterFields,
  indexHeaderValues,
  itamValues,
  openCloseModal,
  setCurrentCarArr,
  carsData,
  setFilterRun,
  filterRun,
}) {
  const options = filterFields[indexHeaderValues] || [];
  console.log(options, "<===========================");
  const [selectItems, setSelectItems] = useState([]);

  function addingByCheckbox(item) {
    setSelectItems((prevSelectItems) =>
      prevSelectItems.includes(item)
        ? prevSelectItems.filter((i) => i !== item)
        : [...prevSelectItems, item]
    );
  }
  return (
    <div
      className="modal-overlay"
      onClick={() => openCloseModal(itamValues, indexHeaderValues)}
    >
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <ul className="modal-list">
          {options.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={selectItems.includes(item)}
                onClick={(event) => {
                  event.stopPropagation();
                  addingByCheckbox(item);
                }}
              />
              {item[itamValues.keyValue]}
            </li>
          ))}
        </ul>
        <button
          onClick={(event) => {
            filterAllTables(selectItems, setCurrentCarArr, carsData, filterRun);
            event.stopPropagation();
            setFilterRun(true);
          }}
        >
          Отфильтровать
        </button>
      </div>
    </div>
  );
}