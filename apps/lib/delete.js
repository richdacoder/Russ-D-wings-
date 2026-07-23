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

  const res = fetch(
    `${url}/api/${endPoint}/:id`,{
      method:'DELETE'
    }
  )
} catch(err){

}

}
