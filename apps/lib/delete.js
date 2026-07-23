/*

objective finsh:
- fnsih delete



*/

export default async function Delete (endPoint){
try{
  const url = process.env.NEXT_PUBLIC_API_URL;
  console.log({
    'url': url,
    'endpoint': endPoint,
  });

  fetch(
    `${url}/api/${endPoint}/:id`
  )
} catch(err){

}

}
