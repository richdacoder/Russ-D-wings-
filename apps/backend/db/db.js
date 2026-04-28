const knex = require('knex');
const knexfile = require('../knexfile.js');

const env = process.env.NODE_ENV;

console.log(`🚀 Database connecting to: ${env} mode`);
