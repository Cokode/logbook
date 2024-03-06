import express from 'express';
const router = express.Router();
import { url } from "../component/backendCredentials/backendUrl.mjs"; 
import { postLog } from '../component/backendCredentials/bendPostLog.mjs';


 router.post('/post-log', async (req, res) => {

	if (!req.session.isLoggedin) {
		res.redirect(303, '/');
	}

	const useIt = req.session.user;
	const detail = req.body;

	try {

		const response = await postLog(url, detail, useIt.email);
		const result = await response.json();

		if(result === null) {
			res.send("wrong invalid");
		}

    console.log('I am inside the post_log file, user is valid');

		req.session.user = result;
		console.log(result);

		//alert("Log added scessfully");
		res.redirect(303, '/home');
		
	} catch(error) {
		console.log("h")
	}

});

export default router;