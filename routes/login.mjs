import express from 'express';
const router = express.Router();
import { url } from "../component/backendCredentials/backendUrl.mjs"; 

router.post('/process-login', async (req, res) => { 
	let loginDetails = req.body;

	try {
    const response = await fetch((url+'verifyLogin'), {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });

    const result = await response.json();

    if(result !== null) {
      req.session.isLoggedin = true;
			req.session.user = result;
      req.session.userLogs = result.logs;

      res.locals.logs = result.logs;
			res.redirect(303, '/home');

    } else {
      console.log("unsucessful login attempt");
      res.redirect(303, '/');
    }

  } catch (error) {
    console.error("Server can't be reached", error);
  }
});

export default router;