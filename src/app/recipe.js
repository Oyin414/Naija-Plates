function searchName(name, array) {
  let searchResult = [];
  name = name.toLowerCase().trim();
  for (let i = 0; i < array.length; i++) {
    const element = array[i].name.toLowerCase();
    if (element.includes(name)) {
      searchResult.push(array[i]);
    }
  }
  return searchResult;
}

function maxPrepTime(number, array) {
  const prepArray = [];
  for (let i = 0; i < array.length; i++) {
    if (number === 15) {
      if (array[i].prepTime <= 15) {
        prepArray.push(array[i]);
      }
    }
    if (number === 30) {
      if (array[i].prepTime <= 30) {
        prepArray.push(array[i]);
      }
    }
    if (number === 45) {
      if (array[i].prepTime <= 45) {
        prepArray.push(array[i]);
      }
    }
    if (number === 60) {
      if (array[i].prepTime <= 60) {
        prepArray.push(array[i]);
      }
    }
  }
  return prepArray;
}

export { searchName, maxPrepTime };
