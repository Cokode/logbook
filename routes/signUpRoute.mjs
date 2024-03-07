import express from 'express';
const router = express.Router();
import { url } from "../component/backendCredentials/backendUrl.mjs";
import { postUser } from "../component/backendCredentials/backendPostUser.mjs";

router.post('/sign-up-process', async (req, res) => {
	const info = req.body;
	console.log(JSON.stringify(info));

	try {
		const response = await postUser(url, info);

		if(!(response.ok)) {
			res.render('userExist');
		} else {
			res.redirect(303, '/thank-you');
		}

	} catch (error) {
			console.error('Error creating user:', error);
	}

});

export default router;