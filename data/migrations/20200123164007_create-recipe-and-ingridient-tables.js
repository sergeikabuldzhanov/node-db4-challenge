exports.up = function(knex) {
  return knex.schema
    .createTable("recipe", recipe_table => {
      recipe_table.increments();
      recipe_table.text("name", 128).notNullable();
    })
    .createTable("ingredient", ingredient_table => {
      ingredient_table.increments();
      ingredient_table.text("name", 128).notNullable();
    })
    .createTable("instructions", instructions_table => {
      instructions_table.increments();
      instructions_table.text("instruction_text", 256).notNullable();
      instructions_table
        .integer("step_number")
        .unsigned()
        .notNullable();
      instructions_table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("recipe_ingredient", recipe_ingredient_table => {
      recipe_ingredient_table.increments();
      recipe_ingredient_table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      recipe_ingredient_table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredient")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      recipe_ingredient_table.decimal("quantity").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIdExists("recipe_ingredient")
    .dropTableIdExists("instructions")
    .dropTableIdExists("ingredient")
    .dropTableIdExists("recipe");
};
