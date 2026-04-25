module.exports = {
developement:{
  client:'pg',
  connection:{
    host: "postgres-db",
    port: 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
  }
}
}
