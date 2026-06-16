import "./styles.css";
import { recipes } from "./app/data.js";
import {
  filterByPrepTime,
  renderRecipes,
  searchFilter,
  filterByCookTime,
  filterByCategory,
  initApp,
  clearFilter,
} from "./app/app.js";

function recipePagesHandling() {
  const searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("id")) {
    initApp();
    return;
  }
  renderRecipes(recipes);
  searchFilter();
  filterByCookTime();
  filterByCategory();
  filterByPrepTime();
  clearFilter();
}

recipePagesHandling();
