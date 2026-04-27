module.exports = {
local: {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "yourpassword",
    database: process.env.POSTGRES_DB || "big_jumps_db"
  },
  migrations: {
    directory: './migrations'
  },

}
}
