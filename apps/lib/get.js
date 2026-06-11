/*
- export function with aysnc**
- throw format data **
- url variable to go in fetch
- turn into json in fetch
- make sure to solve if res is not there



*/

export async function get(formdata){
  const url = process.env.NEXT_PUBLIC_API_URL;
  console.log('url', url);

  const res = await fetch(
  `${url}/api/menu`,
  {
    method: 'GET',
    }

  )
  const data = await res.json()




}
