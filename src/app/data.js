/*
{
id: 1,
name: "Jollof Rice",
shortDescription: "A rich tomato-based rice dish cooked with peppers, onions, and spices.",
description:
"Jollof Rice is a popular West African one-pot rice dish made with a tomato and pepper sauce, onions, stock, and seasoning. It is commonly served at parties, celebrations, and family meals, and can be enjoyed on its own or with sides such as plantain or salad and with protein like meat or chicken.",
categories: ["lunch", "dinner", "vegetarian"],
prepTime: 25,
cookTime: 75,
servings: 5,
ingredients: [
"3 cups long-grain rice ",
"4 medium tomatoes",
"2 red bell peppers",
"1 scotch bonnet pepper",
"1 large onion",
"3 tablespoons tomato paste",
"1/4 cup vegetable oil",
"2 cups vegetable stock",
"1 cup water",
"2 tablespoon curry powder",
"1 teaspoon dried thyme",
"1 bay leaf",
"1 teaspoon paprika",
"6 maggi seasoning tablets",
"Salt to taste"
],
instructions: [
"Blend the tomatoes, red bell peppers, scotch bonnet, and half of the onion until smooth.",
"finely chop the remaining onion"
"Heat the vegetable oil in a large pot over medium heat.",
"fry the onion in the oil until soft and fragrant.",
"Add the tomato paste and cook for 10 minutes, stirring often so it does not burn.",
"Pour in the blended pepper mixture.",
"Set the heat to low and season with curry powder, thyme, bay leaf, paprika, seasoning tablets, and salt.",
"Cook the pepper mixture on medium heat for 15-20 minutes or until the pepper mix thickens"
"While that is cooking rinse the rice several times until the water runs mostly clear, then drain and set aside.",
"Add the vegetable stock and water, then stir well.",
"Add the drained rice and stir until the rice is coated in the sauce.",
"Cover the pot tightly with foil covering the pot and cook on low heat until the rice is tender and the liquid has absorbed.",
"Check every 10 minutes and  it should be ready in around 30-40 minutes but add a small splash of water if the rice needs more time to soften and the pot is dry.",
"Once ready turn off the heat and add a table spoon of oil and mix it in then let the rice steam for 5 minutes"
],
image: placeholderImage,
imageAlt: "A plate of Nigerian Jollof Rice",
imageCredit: "Photo by keesha-s-kitchen fron Upsplash"
}


*/

import placeHolderImage from "../images/placeholder.jpg";
import jollofRiceImage from "../images/jollof-rice.jpg";
export const recipes = [
  {
    id: 1,
    name: "Jollof Rice",
    shortDescription:
      "A rich tomato-based rice dish cooked with peppers, onions, and spices.",
    description:
      "Jollof Rice is a popular West African one-pot rice dish made with a tomato and pepper sauce, onions, stock, and seasoning. It is commonly served at parties, celebrations, and family meals, and can be enjoyed on its own or with sides such as plantain or salad and with protein like meat or chicken.",
    categories: ["lunch", "dinner", "vegetarian"],
    prepTime: 25,
    cookTime: 75,
    servings: 5,
    ingredients: [
      "3 cups long-grain rice ",
      "4 medium tomatoes",
      "2 red bell peppers",
      "1 scotch bonnet pepper",
      "1 large onion",
      "3 tablespoons tomato paste",
      "1/4 cup vegetable oil",
      "2 cups vegetable stock",
      "1 cup water",
      "2 tablespoon curry powder",
      "1 teaspoon dried thyme",
      "1 bay leaf",
      "1 teaspoon paprika",
      "6 maggi seasoning tablets",
      "Salt to taste",
    ],
    instructions: [
      "Blend the tomatoes, red bell peppers, scotch bonnet, and half of the onion until smooth.",
      "finely chop the remaining onion",
      "Heat the vegetable oil in a large pot over medium heat.",
      "fry the onion in the oil until soft and fragrant.",
      "Add the tomato paste and cook for 10 minutes, stirring often so it does not burn.",
      "Pour in the blended pepper mixture.",
      "Set the heat to low and season with curry powder, thyme, bay leaf, paprika, seasoning tablets, and salt.",
      "Cook the pepper mixture on medium heat for 15-20 minutes or until the pepper mix thickens",
      "While that is cooking rinse the rice several times until the water runs mostly clear, then drain and set aside.",
      "Add the vegetable stock and water, then stir well.",
      "Add the drained rice and stir until the rice is coated in the sauce.",
      "Cover the pot tightly with foil covering the pot and cook on low heat until the rice is tender and the liquid has absorbed.",
      "Check every 10 minutes and  it should be ready in around 30-40 minutes but add a small splash of water if the rice needs more time to soften and the pot is dry.",
      "Once ready turn off the heat and add a table spoon of oil and mix it in then let the rice steam for 5 minutes",
    ],
    image: jollofRiceImage,
    imageAlt: "A plate of Nigerian Jollof Rice",
    imageCredit: "Photo by keesha-s-kitchen fron Upsplash",
  },
  {
    id: 2,
    name: "Fried Rice",
    shortDescription: "A colourful rice dish cooked with vegetables.",
    description:
      "Nigerian Fried Rice is a flavourful rice dish cooked with mixed vegetables and seasoning. It is commonly served at parties with chicken, plantain, or salad.",
    categories: ["lunch", "dinner"],
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    ingredients: ["Rice", "Mixed vegetables", "Onion", "Stock", "Curry powder"],
    steps: [
      "Parboil the rice until partly cooked.",
      "Fry onions and vegetables with seasoning.",
      "Add the rice and stock gradually.",
      "Stir and cook until the rice is soft.",
      "Serve warm with your preferred side.",
    ],
    image: placeHolderImage,
  },
  {
    id: 3,
    name: "Suya",
    shortDescription: "Spicy grilled beef skewers.",
    description:
      "Suya is a popular Nigerian street food made from thinly sliced beef coated in a spicy peanut-based seasoning. It is often served with onions, tomatoes, and extra pepper.",
    categories: ["snacks", "dinner"],
    prepTime: 25,
    cookTime: 20,
    servings: 4,
    ingredients: ["Beef", "Suya spice", "Oil", "Onion", "Tomatoes"],
    steps: [
      "Slice the beef thinly and place onto skewers.",
      "Brush lightly with oil.",
      "Coat the beef with suya spice.",
      "Grill until cooked through and slightly charred.",
      "Serve with sliced onions and tomatoes.",
    ],
    image: placeHolderImage,
  },
  {
    id: 4,
    name: "Puff Puff",
    shortDescription: "Sweet deep-fried dough balls.",
    description:
      "Puff Puff is a soft and sweet Nigerian snack made from a simple yeast dough. It is often served at parties, gatherings, or as a quick treat.",
    categories: ["snacks", "dessert", "vegetarian"],
    prepTime: 15,
    cookTime: 20,
    servings: 6,
    ingredients: ["Flour", "Sugar", "Yeast", "Water", "Oil"],
    steps: [
      "Mix flour, sugar, yeast, and warm water into a soft batter.",
      "Cover and allow the batter to rise.",
      "Heat oil in a deep pan.",
      "Scoop small portions into the hot oil.",
      "Fry until golden brown and drain before serving.",
    ],
    image: placeHolderImage,
  },
  {
    id: 5,
    name: "Egusi Soup",
    shortDescription: "A rich soup made with ground melon seeds.",
    description:
      "Egusi Soup is a hearty Nigerian soup made with ground melon seeds, leafy greens, and assorted seasoning. It is commonly eaten with swallows such as pounded yam, eba, or amala.",
    categories: ["lunch", "dinner"],
    prepTime: 25,
    cookTime: 45,
    servings: 5,
    ingredients: ["Ground egusi", "Spinach", "Palm oil", "Onion", "Stock"],
    steps: [
      "Prepare the egusi paste with water and seasoning.",
      "Heat palm oil and fry onions.",
      "Add the egusi mixture and cook until thickened.",
      "Add stock and leafy greens.",
      "Simmer until the soup is rich and fully cooked.",
    ],
    image: placeHolderImage,
  },
];
