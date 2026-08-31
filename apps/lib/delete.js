/*

objective finsh:
- fnsih delete



*/

export default async function Delete (endPoint, id){
  console.log('delete page');
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

const data = await res.json();

if(!res.ok){
throw new Error(res.message)
};

console.log('deleted');


return data;



} catch(err){
console.error(err);
}

}
