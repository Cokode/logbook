export default async function postUpdatedUser(url, body) {
  const response = await fetch(url + "updateInfo", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  return response;
}