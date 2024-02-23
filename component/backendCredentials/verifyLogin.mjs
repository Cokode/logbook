async function verifyLogin(url, data) {

  try {
    const response = await fetch((url+'verifyLogin'), {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
   
    if(result !== null) {
      console.log("Success:", result);
    } else {
      console.log("failure... result is null");
    }

    return result;

  } catch (error) {
    console.error("Error:", error);
  }
}



export {verifyLogin};