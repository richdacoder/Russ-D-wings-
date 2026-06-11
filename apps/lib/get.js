/*
- export function with aysnc**
- throw format data **
- url variable to go in fetch
- turn into json in fetch
- make sure to solve if res is not there



*/

export default async function Get(endpoint){

  console.log('endpoint', endpoint);
  const url = process.env.NEXT_PUBLIC_API_URL;
  console.log('url yes', url);
  console.log('ENV:', process.env.NEXT_PUBLIC_API_URL);
  console.log('RUNTIME TYPE:', typeof window === 'undefined' ? 'server' : 'client');
  try{

  const res = await fetch(
  `${url}/api/${endpoint}`,
  {
    method: 'GET'
    }

  )

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  const data = await res.json();
  console.log('get page data', data);

  return data

  } catch(err){
    console.log(err)
  }



}
