import { searchName, maxPrepTime } from "./recipe.js";
const testRecipes = [
  {
    id: 1,
    name: "Jollof Rice",
    categories: ["lunch", "dinner", "vegetarian"],
    prepTime: 20,
    cookTime: 60,
  },
  {
    id: 2,
    name: "Fried Rice",
    categories: ["lunch", "dinner"],
    prepTime: 20,
    cookTime: 35,
  },
  {
    id: 3,
    name: "Suya",
    categories: ["snacks", "dinner"],
    prepTime: 25,
    cookTime: 20,
    servings: 4,
  },
];

test("return recipes that match full name", () => {
  const results = searchName("Jollof Rice", testRecipes);
  expect(results).toHaveLength(1);
  expect(results[0].name).toBe("Jollof Rice");
});

test("return empty array when no name match is found", () => {
  const results = searchName("pizza", testRecipes);
  expect(results).toHaveLength(0);
  expect(results).toEqual([]);
});

test("return recipes that match partial name", () => {
  const results = searchName("Rice", testRecipes);
  expect(results).toHaveLength(2);
  expect(results).toEqual([
    {
      id: 1,
      name: "Jollof Rice",
      categories: ["lunch", "dinner", "vegetarian"],
      prepTime: 20,
      cookTime: 60,
    },
    {
      id: 2,
      name: "Fried Rice",
      categories: ["lunch", "dinner"],
      prepTime: 20,
      cookTime: 35,
    },
  ]);
});

test("return recipes that match case insensitive names", () => {
  const results = searchName("SUYA", testRecipes);
  expect(results).toHaveLength(1);
  expect(results).toEqual([
    {
      id: 3,
      name: "Suya",
      categories: ["snacks", "dinner"],
      prepTime: 25,
      cookTime: 20,
      servings: 4,
    },
  ]);
});

test("return recipes that match names with whitespaces", () => {
  const results = searchName("  rice   ", testRecipes);
  expect(results).toHaveLength(2);
  expect(results).toEqual([
    {
      id: 1,
      name: "Jollof Rice",
      categories: ["lunch", "dinner", "vegetarian"],
      prepTime: 20,
      cookTime: 60,
    },
    {
      id: 2,
      name: "Fried Rice",
      categories: ["lunch", "dinner"],
      prepTime: 20,
      cookTime: 35,
    },
  ]);
});

test("return recipes with prep times less than or equal to selected time", () => {
  const results = maxPrepTime(30, testRecipes);
  expect(results).toHaveLength(3);
  expect(results).toEqual([
    {
      id: 1,
      name: "Jollof Rice",
      categories: ["lunch", "dinner", "vegetarian"],
      prepTime: 20,
      cookTime: 60,
    },
    {
      id: 2,
      name: "Fried Rice",
      categories: ["lunch", "dinner"],
      prepTime: 20,
      cookTime: 35,
    },
    {
      id: 3,
      name: "Suya",
      categories: ["snacks", "dinner"],
      prepTime: 25,
      cookTime: 20,
      servings: 4,
    },
  ]);
});

test("return empty array if no match is found", () => {
  const results = maxPrepTime(15, testRecipes);
  expect(results).toEqual([]);
});
