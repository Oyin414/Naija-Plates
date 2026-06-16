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
    if (array[i].prepTime <= number) {
      prepArray.push(array[i]);
    }
  }
  return prepArray;
}

function maxCookTime(number, array) {
  const cookArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].cookTime <= number) {
      cookArray.push(array[i]);
    }
  }
  return cookArray;
}

function categoryFilter(string, array) {
  const categoryArray = array.filter((item) =>
    item.categories.includes(string),
  );
  return categoryArray;
}

function findRecipeWithId(id, array) {
  return array.find((element) => element.id === id);
}

export {
  searchName,
  maxPrepTime,
  maxCookTime,
  categoryFilter,
  findRecipeWithId,
};
