export function searchName(name, array) {
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
