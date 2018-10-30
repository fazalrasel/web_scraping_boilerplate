module.exports = {
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    database: '',
    user: 'root',
    password: ''
  },
  migrations: {
    directory: __dirname + '/db/migrations'
  },
  seeds: {
    directory: __dirname + '/db/seeds'
  },
  pool: {
    min: 0,
    max: 7
  },
  debug: false
};
