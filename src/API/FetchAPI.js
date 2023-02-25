import axios from 'axios';
const TOKEN = `63fa063e473885d837d70d3e`;
export async function FetchAPI() {
  const response = await axios
    .get(`https://${TOKEN}.mockapi.io/contacts`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    .catch(error => console.error(error));

  console.log(response.data);
  return response.data;
}

export async function PostContact(contact) {
  fetch(`https://${TOKEN}.mockapi.io/contacts`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(contact),
  }).catch(error => console.error(error));
}
