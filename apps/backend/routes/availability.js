const express = require('express');
const router = express.Router();
const db = require('../db/db.js');

/*
- put rewquest body in variable*

- create new object exracting from request body*

- make an array named required for required data or any other way to make sure data is valid
  and none is missing.

  http://localhost:3001/api/availability
  http://localhost:3001/availability


-

*/
console.log('router');

router.get('/availability', async (req, res) =>{
try{
  console.log('working get avvaiibility');
const data = await db('time_slots').select('*');


 res.status(200).json(data);

}catch(err){
console.error('response error', err);

res.status(500).json({error:'fail to retrieve availability'});
}
});












router.post('/availability', async (req, res) => {
  const data = req.body
  console.log(data);
  try{
    const required = [
      'start_time',
      'end_time',
      'is_active'
    ]

    console.log('check 1');

    const missingFields = required.filter(f =>
      data[f]=== null ||
      data[f] === undefined ||
      data[f] === ''
    );

        console.log('check 2');


    if(missingFields.length){
      return res.status(400).json({error:`missing required fields: ${missingFields.join(',')}`})
    }

        console.log('check 3', data, typeof data);

    const query = await db('time_slots')
    .insert(data)
    .returning('*');

        console.log('check 4');
    return res.status(201).json(query);

    console.log('new request', query);
        console.log('check 5');

  }catch(err){
    console.error(err);
  }
});


















router.delete('availabilty/:id', async (res,req) => {

})

module.exports = router
