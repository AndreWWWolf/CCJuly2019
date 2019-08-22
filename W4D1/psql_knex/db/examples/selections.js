const knex = require('../db/client');

knex
  .select('*')
  .from('posts')
  .whereRaw(`"created_at" > now() - interval '2' day`)
  .then(data => {
    console.log(data);
    knex.destroy();
  });

knex
  .select('*')
  .max('id as maxId')
  .sum('id as totalIds')
  .from('posts')
  .then(data => {
    console.table(data);
    knex.destroy();  // destroys the connection to the database
    // if the query is successful, the result of the query gets returend
    // as an array of objects. We access the array from the argument in the callback
    // passed to .then()
  })