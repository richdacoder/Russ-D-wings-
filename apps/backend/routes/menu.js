const express = require('express');
const router = express.Router();
const db = require('../db/db.js');

/*
- make require array x
- check for missing field x
- make 404 errorx
- insert into database


*/
router.get("/menu", async (req,res) =>{
  try{
   const menu = await db("menu")
  .select('*');

  console.log('look', menu);

  res.status(200).json(menu);

  } catch(err){
    console.error(err);
    res.status(500).json({
      error: "Failed to fetch menu"
    });
  }

}
)




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

    return res.status(201).json(query);

    console.log('after post menu', query);

  }catch(err){
console.error(err);
}
})






/*
- make sure theres data
- grab the data
- speak to database

*/

router.delete('/menu/:id', async (req, res) => {
console.log('reached delet but not deleted', req);
  try{
    const {id} = req.params;

   await db('menu')
    .where({id})
    .delete();

  } catch(err){
    console.error(err);
  }
}
)



module.exports = router
