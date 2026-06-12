import { recipes } from "./data.js";
import { searchName } from "./recipe.js";

function renderRecipes(array) {
  const recipesContainer = document.querySelector("#recipes");
  recipesContainer.innerHTML = "";
  if (array.length === 0) {
    recipesContainer.textContent = "No Recipes Found";
    return;
  }
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
    serving.textContent = `Servings: ${array[i].servings}`;
    detailsContainer.appendChild(serving);
    const prep = document.createElement("span");
    prep.textContent = `Prep: ${array[i].prepTime} mins`;
    detailsContainer.appendChild(prep);
    const cook = document.createElement("span");
    cook.textContent = `Cook: ${array[i].cookTime} mins`;
    detailsContainer.appendChild(cook);
    gridItem.appendChild(detailsContainer);
    recipesContainer.appendChild(gridItem);
  }
}

function searchFilter() {
  const search = document.querySelector("#recipes-search");
  const form = document.querySelector("#form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (search.validity.valueMissing) {
      return search.reportValidity();
    }
    const name = search.value;
    const searchArray = searchName(name, recipes);
    renderRecipes(searchArray);
    search.value = "";
  });
}

export { renderRecipes, searchFilter };
