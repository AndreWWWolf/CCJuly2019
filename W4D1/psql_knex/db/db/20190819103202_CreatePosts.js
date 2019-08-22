
exports.up = function(knex) {
    return knex.schema.createTable("posts", table => {
      // create a column called id with the type of bigint that also increments
      table.bigIncrements("id");
      // create a column `title` with type of string
      table.string("title");
      // column `content` with type text
      table.text("content");
      // created and updated at timestamps
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("posts");
  };
  