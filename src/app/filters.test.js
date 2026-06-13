import { searchName } from "./recipe.js";
const testRecipes = [
  { id: 1, name: "Jollof Rice" },
  { id: 2, name: "Fried Rice" },
  { id: 3, name: "Suya" },
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
    { id: 1, name: "Jollof Rice" },
    { id: 2, name: "Fried Rice" },
  ]);
});

test("return recipes that match case insensitive names", () => {
  const results = searchName("SUYA", testRecipes);
  expect(results).toHaveLength(1);
  expect(results).toEqual([{ id: 3, name: "Suya" }]);
});

test("return recipes that match names with whitespaces", () => {
  const results = searchName("  rice   ", testRecipes);
  expect(results).toHaveLength(2);
  expect(results).toEqual([
    { id: 1, name: "Jollof Rice" },
    { id: 2, name: "Fried Rice" },
  ]);
});
