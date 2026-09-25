/*

- need url
- make api call
- add type in all databases


*/



export default async function Put(formatData){

  console.log('put data format', formatData)
  const type = formatData.type;

  const id = formatData.id;

  const url = process.env.NEXT_PUBLIC_API_URL;

  console.log({
    'id': id,
    'url': url,
    'type': type
  })

  const res = await fetch(`${url}/api/${type}/${id}`, {
    method:'PUT',
    headers: {'Content-Type' : 'application/json'},
    body:  JSON.stringify(formatData)
  }
  );

  console.log('after res fetch');

  if(!res.ok){
    console.error({message:'error with PUT'});
  };

  const data = await res.json();

  return data;
};
