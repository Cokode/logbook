async function postLog (url, body, userIDorEmail) {

  const response = await fetch((url + "addLog?email="+userIDorEmail), {
    method : 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  return response;
}

export {postLog};