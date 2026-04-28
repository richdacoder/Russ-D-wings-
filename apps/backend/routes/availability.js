const express = require('express');
const router = express.Router();
const db = require('../db/db.js');

console.log('router');

router.post('/availability', async (req, res) => {
  console.log(req.body);
});

module.exports = router
