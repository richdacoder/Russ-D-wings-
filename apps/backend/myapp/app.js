const express = require('express');
const app = express();

/*
- make sure health is 200
- added allowed urls
- add cors
- make middleware
- make 404 handler
- make error hanler

*/

app.get('/health', (req, res) => {
  res.status(200)
  .json({status:200})
})
