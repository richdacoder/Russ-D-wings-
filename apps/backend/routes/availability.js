const express = require('express');
const router = express.Router();
const db = require('../db/db.js');

/*
- put rewquest body in variable*

- create new object exracting from request body*

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
    const required = [
      'date',
      'start_time',
      'end_time',
      'is_active'
    ]

    const missingFields = required.filter(f => {
      data[f]=== null ||
      data[f] === undefined ||
      data[f] === '';
    });

    if(missingFields.length){
      return res.status(400).json({error:`missing required fields: ${missingFields.join(',')}`})
    }
  }catch(err){
    console.error(err);
  }
});

module.exports = router
