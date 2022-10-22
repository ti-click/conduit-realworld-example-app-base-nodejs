module.exports = {
  development: {
    username: process.env.TiDB_USER,
    password: process.env.TiDB_PASSWORD,
    database: process.env.TiDB_DATABASE,
    host: process.env.TiDB_HOST,
    port: process.env.TiDB_PORT,
    dialect: "mysql",
  },
  test: {
    username: process.env.TiDB_USER,
    password: process.env.TiDB_PASSWORD,
    database: process.env.TiDB_DATABASE,
    host: process.env.TiDB_HOST,
    port: process.env.TiDB_PORT,
    dialect: "mysql",
  },
  production: {
    username: process.env.TiDB_USER,
    password: process.env.TiDB_PASSWORD,
    database: process.env.TiDB_DATABASE,
    host: process.env.TiDB_HOST,
    port: process.env.TiDB_PORT,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
