const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const {
  getInstructions,
  getRecipes,
  getShoppingList,
  getRecipesForIngredient
} = require("./data/db-helpers");

const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

server.get("/api/recipes", async (req, res, next) => {
  try {
    const recipes = await getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
});

server.get("/api/recipes/:id/shoppingList", async (req, res, next) => {
  const { id } = req.params;
  try {
    const shoppingList = await getShoppingList(id);
    res.status(200).json(shoppingList);
  } catch (error) {
    next(error);
  }
});

server.get("/api/recipes/:id/instructions", async (req, res, next) => {
  const { id } = req.params;
  try {
    const instructions = await getInstructions(id);
    res.status(200).json(instructions)
  } catch (error) {
    next(error);
  }
});

server.get("/api/ingredients/:id/recipes", async (req, res, next) => {
  const { id } = req.params;
  try {
    const recipes = await getRecipesForIngredient(id);
    res.status(200).json(recipes)
  } catch (error) {
    next(error);
  }
});

module.exports = server;
