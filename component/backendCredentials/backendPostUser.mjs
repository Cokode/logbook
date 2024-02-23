async function postUser (url, body) {

  const response = await fetch(url + "createUser", {
    method : 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  return response;
}

export {postUser};