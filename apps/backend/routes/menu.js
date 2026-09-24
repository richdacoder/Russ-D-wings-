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










router.put('/menu/:id', async (req, res) => {
  try{
    const { id } = req.params;

    await db('menu')
    .where({id})
    .update(req.body);


  }catch(err){
    console.error(err);
  }
});

/*
- make sure theres data
- grab the data
- speak to database

*/











router.delete('/menu/:id', async (req, res) => {
console.log('reached delet but not deleted');
  try{
    const {id} = req.params;

   const deletedRows = await db('menu')
    .where({id})
    .delete();

    if(deletedRows === 0)return res.status(404).json({
    message: 'Availability not found.'
});

res.status(200).json({
  message: 'Availability deleted successfully.'
});
    console.log('deleted from menu now');


  } catch(err){
    console.error(err);
    res.status(500).json({
error:'Internal server error.'
});

  }
}
)



module.exports = router
