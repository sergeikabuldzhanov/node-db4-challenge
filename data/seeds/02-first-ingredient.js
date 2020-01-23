
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {name: 'genericOatsBrand1'},
        {name: 'genericOatsBrand2'},
        {name: 'genericOatsBrand3'}
      ]);
    });
};
