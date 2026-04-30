const express = require('express');
const router = express.router();
const db = require('../db/db.js');

router.post("/menu", async (req,res) =>{
  const data = req.body;
try{

}catch(err){
console.error(err);
}
})

module.exports = router
