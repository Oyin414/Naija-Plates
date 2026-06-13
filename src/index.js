import "./styles.css";
import { recipes } from "./app/data.js";
import {
  filterByPrepTime,
  renderRecipes,
  searchFilter,
  filterByCookTime,
} from "./app/app.js";
import { searchName, maxPrepTime, maxCookTime } from "./app/recipe.js";

console.log(renderRecipes(recipes));

console.log(filterByPrepTime());
searchFilter();
filterByCookTime();
