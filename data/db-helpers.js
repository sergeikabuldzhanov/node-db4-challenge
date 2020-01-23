const db = require("./db-config");
//table name variables
const r = "recipe";
const ins = "instructions";
const ing = "ingredient";
const ri = "recipe_ingredient";

/* 
getRecipes(): should return a list of all recipes in the database.
 */
function getRecipes() {
  return db(r);
}
/* 
 getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
 */
function getShoppingList(recipe_id) {
  return db(ri)
    .join(ing, 'ingredient.id', '=', 'ingredient_id')
    .where({ recipe_id })
    .select("name", "quantity");
}
/* 
 getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe
 */
function getInstructions(recipe_id) {
  return db(ins)
    .where({ recipe_id })
    .orderBy("step_number", "asc");
}

function getRecipesForIngredient(ingredient_id) {
    return db(ri).join(r, 'recipe.id', '=', 'recipe_id').where({ingredient_id}).select('name as recipe_name')
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesForIngredient
};
