import { recipes } from "./data.js";
import {
  searchName,
  maxPrepTime,
  maxCookTime,
  categoryFilter,
  findRecipeWithId,
} from "./recipe.js";
import fullClockIcon from "../images/clock-solid-full.svg";
import ClockIcon from "../images/clock-regular-full.svg";
import groupIcon from "../images/user-group-solid-full.svg";

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

function initApp() {
  const main = document.querySelector("#main");
  const container = document.createElement("div");
  container.classList.add("recipe-detail-container");
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
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    image.src = returnedRecipe.image;
    image.alt = returnedRecipe.imageAlt;
    imageContainer.appendChild(image);
    imageContainer.classList.add("recipe-detail-image");
    container.appendChild(imageContainer);
    const title = document.createElement("h2");
    title.classList.add("recipe-detail-title");
    title.textContent = `${returnedRecipe.name}`;
    container.appendChild(title);
    const description = document.createElement("p");
    description.textContent = `${returnedRecipe.description}`;
    description.classList.add("recipe-detail-description");
    container.appendChild(description);
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("recipe-detail-times");
    const prepTime = document.createElement("div");
    const prepImage = document.createElement("img");
    prepImage.src = fullClockIcon;
    prepImage.alt = "";
    prepImage.ariaHidden = "true";
    prepTime.appendChild(prepImage);
    const prepLabel = document.createElement("div");
    prepLabel.textContent = "Prep Time:";
    prepTime.appendChild(prepLabel);
    const prepValue = document.createElement("p");
    prepValue.textContent = `${returnedRecipe.prepTime} mins`;
    prepTime.appendChild(prepValue);
    detailsContainer.appendChild(prepTime);
    const cookTime = document.createElement("div");
    const cookImage = document.createElement("img");
    cookImage.src = ClockIcon;
    cookImage.alt = "";
    cookImage.ariaHidden = "true";
    cookTime.appendChild(cookImage);
    const cookLabel = document.createElement("div");
    cookLabel.textContent = "Cook Time:";
    cookTime.appendChild(cookLabel);
    const cookValue = document.createElement("p");
    cookValue.textContent = `${returnedRecipe.cookTime} mins`;
    cookTime.appendChild(cookValue);
    detailsContainer.appendChild(cookTime);
    const servings = document.createElement("div");
    const servingsImage = document.createElement("img");
    servingsImage.src = groupIcon;
    servingsImage.alt = "";
    servingsImage.ariaHidden = "true";
    servings.appendChild(servingsImage);
    const servingsLabel = document.createElement("div");
    servingsLabel.textContent = "Servings:";
    servings.appendChild(servingsLabel);
    const servingsValue = document.createElement("p");
    servings.appendChild(servingsValue);
    servingsValue.textContent = `${returnedRecipe.servings}`;
    detailsContainer.appendChild(servings);
    container.appendChild(detailsContainer);
    const recipeContainer = document.createElement("div");
    recipeContainer.classList.add("recipe-detail-info");
    const ingredientsContainer = document.createElement("div");
    ingredientsContainer.classList.add("recipe-detail-lists");
    const ingredientsTitle = document.createElement("h3");
    ingredientsTitle.textContent = "Ingredients";
    ingredientsContainer.appendChild(ingredientsTitle);
    const ingredients = document.createElement("ul");
    for (let i = 0; i < returnedRecipe.ingredients.length; i++) {
      const list = document.createElement("li");
      list.textContent = `${returnedRecipe.ingredients[i]}`;
      ingredients.appendChild(list);
    }
    ingredientsContainer.appendChild(ingredients);
    recipeContainer.appendChild(ingredientsContainer);
    const instructionsContainer = document.createElement("div");
    instructionsContainer.classList.add("recipe-detail-lists");
    const instructionsTitle = document.createElement("h3");
    instructionsTitle.textContent = "Instructions";
    instructionsContainer.appendChild(instructionsTitle);
    const instructions = document.createElement("ol");
    for (let i = 0; i < returnedRecipe.instructions.length; i++) {
      const list = document.createElement("li");
      list.textContent = `${returnedRecipe.instructions[i]}`;
      instructions.appendChild(list);
    }
    instructionsContainer.appendChild(instructions);
    recipeContainer.appendChild(instructionsContainer);
    container.appendChild(recipeContainer);
  }
  main.appendChild(container);
}
function clearFilter() {
  const clearButton = document.querySelector("#clear");
  const category = document.querySelector("#category");
  const prep = document.querySelector("#prep");
  const cook = document.querySelector("#cook");
  clearButton.addEventListener("click", function () {
    category.value = "";
    prep.value = "";
    cook.value = "";
    renderRecipes(recipes);
  });
}

function toggleNav() {
  const navToggle = document.querySelector(".nav_toggle");
  const navLinks = document.querySelector(".nav_links");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("nav_links_active");
  });
}

export {
  renderRecipes,
  searchFilter,
  filterByPrepTime,
  filterByCookTime,
  filterByCategory,
  initApp,
  clearFilter,
  toggleNav,
};
