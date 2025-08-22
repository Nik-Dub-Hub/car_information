export function getHeadFileds(tableHeaderValues, carsData) {
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
          filtered.push({ [nameKey.keyValue]: carsData[i][nameKey.keyValue] });
        }
      }
      filteredAll.push(filtered);
    }

    return filteredAll;
  } else return null;
}

export function filterAllTables(selectItems, setCurrentCarArr, carsData, filterRun) {
  setCurrentCarArr((prev) => {
    if (!Array.isArray(selectItems) || selectItems.length === 0) {
      return carsData;
    }
      const allCar = filterRun ? prev : carsData;
      const filtred = allCar.filter((carObj) =>
        selectItems.some((filterObj) =>
          Object.keys(filterObj).every(
            (key) =>
              carObj[key]?.toLowerCase() === filterObj[key]?.toLowerCase()
          )
        )
      );
    
    return filtred;
  });
}




