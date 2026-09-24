/*

- need url
- make api call
- add type in all databases


*/



export default async function Put(formatData){

  const type = formatData.type;

  const id = formatData.id;

  const url = process.env.NEXT_PUBLIC_API_URL;

  fetch(`${url}/api/${type}/${id}`, {
    method:'PUT',
    headers: {'Content-Type' : 'application/json'},
    body: json.stringfy(formatData)
  }
  )


}
