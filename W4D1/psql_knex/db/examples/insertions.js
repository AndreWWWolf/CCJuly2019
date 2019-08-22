const knex = require('../db/client');

knex("posts")
  .insert({
    title: "first post!",
    content: "inserting stuff into our posts table with knex"
  }).returning('title', 'content')
  .then((data) => {
    console.log(data);
  });