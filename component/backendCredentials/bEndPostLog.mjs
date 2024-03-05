async function postLog (url, body, userIDOrEmail) {

  const response = await fetch((url + `addLog?email=${userIDOrEmail}`), {
    method : 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  return response;
}

export {postLog};