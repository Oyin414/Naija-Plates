/*
renderrecipes(arr)
1.for loop that loops through the array.length
1.first grab the recipes id container
2. then create  a div element called griditem
3. create a image element with src as the object image path and alt being short description
4. create a h3 element with the recipes name
5.create a paragragh with recipes short dexription 
6. create 3 spans with servings , prep and  cook
 
*/

function renderRecipes(array) {
  const recipesContainer = document.querySelector("#recipes");
  for (let i = 0; i < array.length; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    const img = document.createElement("img");
    img.src = array[i].image;
    img.alt = array[i].name;
    gridItem.appendChild(img);
    const header = document.createElement("h3");
    header.textContent = `${array[i].name}`;
    gridItem.appendChild(header);
    const description = document.createElement("p");
    description.textContent = `${array[i].shortDescription}`;
    gridItem.appendChild(description);
    const detailsContainer = document.createElement("div");
    const serving = document.createElement("span");
    serving.textContent = `Servings:${array[i].servings}`;
    detailsContainer.appendChild(serving);
    const prep = document.createElement("span");
    prep.textContent = `Prep:${array[i].prepTime}`;
    detailsContainer.appendChild(prep);
    const cook = document.createElement("span");
    cook.textContent = `Cook:${array[i].cookTime}`;
    detailsContainer.appendChild(cook);
    gridItem.appendChild(detailsContainer);
    recipesContainer.appendChild(gridItem);
  }
  return recipesContainer;
}

export { renderRecipes };
