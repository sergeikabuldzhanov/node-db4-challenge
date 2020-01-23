exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredient")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredient").insert([
        { recipe_id: 2, ingredient_id: 2, quantity: 7.5 },
        { recipe_id: 1, ingredient_id: 1, quantity: 7.5 },
        { recipe_id: 3, ingredient_id: 3, quantity: 7.5 }
      ]);
    });
};
