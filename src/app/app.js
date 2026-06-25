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
    const link = document.createElement("a");
    link.href = `?id=${array[i].id}`;
    const img = document.createElement("img");
    img.classList.add("image");
    img.src = array[i].image;
    img.alt = array[i].name;
    link.appendChild(img);
    const header = document.createElement("h3");
    header.textContent = `${array[i].name}`;
    link.appendChild(header);
    const description = document.createElement("p");
    description.textContent = `${array[i].shortDescription}`;
    link.appendChild(description);
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("grid-details");
    const serving = document.createElement("div");
    const servingImage = document.createElement("img");
    servingImage.src = groupIcon;
    servingImage.alt = "";
    servingImage.ariaHidden = "true";
    serving.appendChild(servingImage);
    const servingText = document.createElement("span");
    servingText.textContent = `Servings: ${array[i].servings}`;
    serving.appendChild(servingText);
    detailsContainer.appendChild(serving);
    const prep = document.createElement("div");
    const prepImage = document.createElement("img");
    prepImage.src = fullClockIcon;
    prepImage.alt = "";
    prepImage.ariaHidden = "true";
    prep.appendChild(prepImage);
    const prepText = document.createElement("span");
    prepText.textContent = `Prep: ${array[i].prepTime} mins`;
    prep.appendChild(prepText);
    detailsContainer.appendChild(prep);
    const cook = document.createElement("div");
    const cookImage = document.createElement("img");
    cookImage.src = ClockIcon;
    cookImage.alt = "";
    cookImage.ariaHidden = "true";
    cook.appendChild(cookImage);
    const cookText = document.createElement("span");
    cookText.textContent = `Cook: ${array[i].cookTime} mins`;
    cook.appendChild(cookText);
    detailsContainer.appendChild(cook);
    link.appendChild(detailsContainer);
    gridItem.appendChild(link);
    recipesContainer.appendChild(gridItem);
  }
}

function combinedFilter(array) {
  let currentArray = array;
  const search = document.querySelector("#recipes-search").value;
  const prep = document.querySelector("#prep").value;
  const cook = document.querySelector("#cook").value;
  const category = document.querySelector("#category").value;

  if (search !== "") {
    currentArray = searchName(search, currentArray);
  }
  if (prep !== "") {
    if (currentArray.length === 0) {
      return renderRecipes(currentArray);
    }
    currentArray = maxPrepTime(prep, currentArray);
  }
  if (cook !== "") {
    if (currentArray.length === 0) {
      return renderRecipes(currentArray);
    }
    currentArray = maxCookTime(cook, currentArray);
  }
  if (category !== "") {
    if (currentArray.length === 0) {
      return renderRecipes(currentArray);
    }
    currentArray = categoryFilter(category, currentArray);
  }
  return renderRecipes(currentArray);
}

function searchFilter() {
  const search = document.querySelector("#recipes-search");
  const form = document.querySelector("#form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (search.validity.valueMissing) {
      return search.reportValidity();
    }
    combinedFilter(recipes);
    search.value = "";
  });
}

function filterByPrepTime() {
  const prep = document.querySelector("#prep");
  prep.addEventListener("change", function () {
    combinedFilter(recipes);
  });
}

function filterByCookTime() {
  const cook = document.querySelector("#cook");
  cook.addEventListener("change", function () {
    combinedFilter(recipes);
  });
}

function filterByCategory() {
  const category = document.querySelector("#category");
  category.addEventListener("change", function () {
    combinedFilter(recipes);
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
  combinedFilter,
};
