module.exports = {
local: {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD ,
    database: process.env.POSTGRES_DB
  },
  migrations: {
    directory: [
      './migrations/migrations/menu',
      './migrations/migrations/time-slots'
    ]
  },

}
}

console.log("POSTGRES_USER:", process.env.POSTGRES_USER);
console.log("POSTGRES_PASSWORD:", process.env.POSTGRES_PASSWORD);
console.log("POSTGRES_DB:", process.env.POSTGRES_DB);
