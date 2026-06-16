import { recipes } from "./data.js";
import {
  searchName,
  maxPrepTime,
  maxCookTime,
  categoryFilter,
  findRecipeWithId,
} from "./recipe.js";

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
    const link = document.createElement("a");
    link.href = `?id=${array[i].id}`;
    link.textContent = `View Recipe`;
    gridItem.appendChild(link);
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

function filterByPrepTime() {
  const prep = document.querySelector("#prep");
  prep.addEventListener("change", function () {
    if (prep.value === "") {
      renderRecipes(recipes);
      return;
    }
    const number = Number(prep.value);
    const prepArray = maxPrepTime(number, recipes);
    renderRecipes(prepArray);
  });
}

function filterByCookTime() {
  const cook = document.querySelector("#cook");
  cook.addEventListener("change", function () {
    if (cook.value === "") {
      renderRecipes(recipes);
      return;
    }
    const number = Number(cook.value);
    const cookArray = maxCookTime(number, recipes);
    renderRecipes(cookArray);
  });
}

function filterByCategory() {
  const category = document.querySelector("#category");
  category.addEventListener("change", function () {
    if (category.value === "") {
      renderRecipes(recipes);
      return;
    }
    const categoryArray = categoryFilter(category.value, recipes);
    renderRecipes(categoryArray);
  });
}

function renderRecipesPages() {
  const main = document.querySelector("#main");
  const container = document.createElement("div");
  const searchParam = new URLSearchParams(window.location.search);
  if (searchParam.has("id") === false) {
    renderRecipes(recipes);
    return;
  }
  const id = Number(searchParam.get("id"));
  const returnedRecipe = findRecipeWithId(id, recipes);
  main.innerHTML = "";
  if (!returnedRecipe) {
    container.textContent = "Recipe Not Found";
  } else {
    const title = document.createElement("h2");
    title.textContent = `${returnedRecipe.name}`;
    const description = document.createElement("p");
    description.textContent = `${returnedRecipe.description}`;
    container.appendChild(title);
    container.appendChild(description);
  }
  main.appendChild(container);
}

export {
  renderRecipes,
  searchFilter,
  filterByPrepTime,
  filterByCookTime,
  filterByCategory,
  renderRecipesPages,
};
