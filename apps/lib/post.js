/*
- make sure its async function
- have url for both production and local
- have res
- fetch() api
- send object (method, headers, body)
- body- convert to string
- if response is not ok send error in console throw new
- data variable json
- something to check error


*/

export default async function Post(formData){
  console.log('post page', formData);
  const type = formData.type;

  const url = process.env.NEXT_PUBLIC_API_URL;
  console.log('url', url);

 const res = await fetch(`${url}/api/${type}`,
{
  method: 'POST',
  headers:{
    'content-type':'application/json'
  },
  body: JSON.stringify(formData)
});

if(!res.ok){
  const errorText = await res.text();
  console.error('error res', errorText);
  throw new Error('something went wrong');
}
 const data = await res.json();
 console.log(data);

}
