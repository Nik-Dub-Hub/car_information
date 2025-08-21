import { carsData } from "../../widgets/CarListItem/model/mocks/carsData";



export  function getFileds(tableHeaderValues, carsData)  {
  const filteredAll = [];
  if (Array.isArray(carsData) && carsData.length !== 0) {
    for (let fA = 0; fA <= tableHeaderValues.length - 1; fA++) {
      const filtered = [];
      const check = {};
      for (let i = 0; i <= carsData.length - 1; i++) {
        const nameKey = tableHeaderValues[fA];
        const valueFiledLower = carsData[i][nameKey.keyValue].toLowerCase();
        if (!check[valueFiledLower]) {
          check[valueFiledLower] = true;
          filtered.push({ [nameKey.keyValue] : carsData[i][nameKey.keyValue] });
          
        }
      }
      filteredAll.push(filtered);
    }
    console.log(filteredAll,'123456789ertyuvbnm')
    return filteredAll;
  } else return null;
};

export  function filterAllTables(selectItems, setCurrentCarArr) {


}

