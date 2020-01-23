exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          recipe_id: 1,
          step_number: 1,
          instruction_text: "Put your oats in a plate"
        },
        { recipe_id: 1, step_number: 2, instruction_text: "Add milk" },
        {
          recipe_id: 1,
          step_number: 3,
          instruction_text: "Put them in the fridge"
        },
        {
          recipe_id: 2,
          step_number: 1,
          instruction_text: "Put your oats in a plate"
        },
        { recipe_id: 2, step_number: 2, instruction_text: "Add milk" },
        {
          recipe_id: 2,
          step_number: 3,
          instruction_text: "Put them in the fridge"
        }
      ]);
    });
};
