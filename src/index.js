import "./styles.css";
import { recipes } from "./app/data.js";
import {
  filterByPrepTime,
  renderRecipes,
  searchFilter,
  filterByCookTime,
  filterByCategory,
  renderRecipesPages,
} from "./app/app.js";

console.log(renderRecipes(recipes));

console.log(renderRecipesPages());
searchFilter();
filterByCookTime();
