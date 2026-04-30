const express = require('express');
const router = express.Router();
const db = require('../db/db.js');

/*
- make require array x
- check for missing field x
- make 404 errorx
- insert into database


*/
router.post("/menu", async (req,res) =>{
  const data = req.body;
  console.log('menu', data);
try{
const required = [
   'category',
   'dish',
   'price',
   'stock',
   'description'
];

const missingFields = required.filter(f =>
  data[f] === undefined ||
  data[f] === null ||
  data[f] === ''
);

    if(missingFields.length){
      return res.status(400).json({error:`missing required fields: ${missingFields.join(',')}`})
    }

    const query = await db('menu')
    .insert(data)
    .returning('*');

    console.log('after post menu', query);

  }catch(err){
console.error(err);
}
})

module.exports = router
