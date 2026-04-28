const express = require('express');
const router = express.Router();

console.log('router');

router.post('/availability', (req, res) => {
  console.log(req.body);
 return res.status(200).json({
   available: true,
   message: 'Test working',
 })
});

module.exports = router
