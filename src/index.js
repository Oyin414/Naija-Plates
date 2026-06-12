import "./styles.css";
import { recipes } from "./app/data.js";
import { renderRecipes, searchFilter } from "./app/app.js";
import { searchName } from "./app/recipe.js";

console.log(renderRecipes(recipes));

console.log(searchFilter());
