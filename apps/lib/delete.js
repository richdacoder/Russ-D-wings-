/*

objective finsh:
- fnsih delete



*/

export default async function Delete (endPoint, id){
try{
  const url = process.env.NEXT_PUBLIC_API_URL;
  console.log({
    'url': url,
    'endpoint': endPoint,
    'id': id
  });

  const res = await fetch(
    `${url}/api/${endPoint}/${id}`,{
      method:'DELETE'
    }
  );
if(!res.ok){
  res.json({
    'message': 'Delet not succesful'
  })
};

const data = await res.json();


console.log('deleted');

} catch(err){
console.error(err);
}

}
