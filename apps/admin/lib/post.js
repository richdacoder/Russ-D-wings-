/*
- make sure its async function
- have url for both production and local
- have res
- fetch() api
- send object (method, headers, body)
- body- convert to string
- data variable json
- something to check error

*/

export default async function Post(){
 const url = 'http://localhost:3000';

 const res = await fetch(`${url}/api/availability`,
{
  method: 'POST',
  headers:{
    'content-type':'application/json'
  },
  body: JSON.stringify({})
})
 const data = await res.json();
 console.log(data);

}
