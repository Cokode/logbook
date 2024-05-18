import express from 'express';
const router = express.Router();

import { url } from "../component/backendCredentials/backendUrl.mjs"; 
import { postLog } from '../component/backendCredentials/bendPostLog.mjs';
 
 router.post('/post-log', async (req, res) => {

	if (!req.session.isLoggedin) {
		res.redirect(303, '/');
	}

	const user = req.session.user;
	const detail = req.body;

	try {

		const response = await postLog(url, detail, user.email);
		const result = await response.json();

		if(result === null || result.status === 400) {
      console.log('this is status code failed ' + result.status);
      res.send("wrong invalid");
		}

		req.session.user = result;
		req.session.userLogs = result.logs;

		res.locals.logs = result.logs;
		console.log(result);

		res.redirect(303, '/home');
    
	} catch(error) {
		console.log("h")
	}

});

export default router;