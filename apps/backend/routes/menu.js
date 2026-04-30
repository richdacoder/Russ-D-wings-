const express = require('express');
const router = express.Router();
const db = require('../db/db.js');

router.post("/menu", async (req,res) =>{
  const data = req.body;
  console.log('menu', data);
try{

}catch(err){
console.error(err);
}
})

module.exports = router
