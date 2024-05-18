 async function getUserName (url, userName) {
  const response = await fetch((url+`verifyUserName?userName=${userName}`));
  return response;
}

export {getUserName};