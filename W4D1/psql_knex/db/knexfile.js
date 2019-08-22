// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'cohort_33_knex_practice',
      // username:'linux_username',
      // password: 'secret_password',
      // for linux users you need a username key and a password key
      // to create a password inside of terminal run:
      // `psql` and then `\password` and type in your password
    },
    migrations: {
      tableName: 'migrations',
      directory: 'db',
    },
  },

};
