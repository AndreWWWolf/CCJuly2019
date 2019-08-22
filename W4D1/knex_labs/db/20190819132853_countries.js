exports.up = function(knex) {
    return knex.schema.createTable("countries", table => {
        table.bigIncrements("value");
        table.string("name");
        table.string("code");
        table.integer("year");
    })
};
exports.down = function(knex) {
    return knex.schema.dropTable("countries");
};