const express = require('express');
const router = express.Router();
const db = require('../db/db.js');

/*
- make require array
- check for missing field
- make 404 error
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

const missingFields = required.filter(f => {
  return
  data[f] === undefined ||
  data[f] === null ||
  data[f] === '';
});

}catch(err){
console.error(err);
}
})

module.exports = router
