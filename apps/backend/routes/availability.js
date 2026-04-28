const express = require('express');
const router = express.Router();
const db = require('../db/db.js');

/*
- put rewquest body in variable

- create new object exracting from request body

- make an array named required for required data or any other way to make sure data is valid
  and none is missing.

  -

-

*/
console.log('router');

router.post('/availability', async (req, res) => {
  const data = req.body
  console.log(data);
  try{
    const normalizedData = {
       date: data.date,
       start_time: data.start_time,
       end_time: data.end_time,
       is_active: true
    }
  }catch(err){
    console.error(err);
  }
});

module.exports = router
