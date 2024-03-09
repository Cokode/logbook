import express from 'express';
const router = express.Router();

router.get('/showlogs', (req, res) => {
	
	if (req.session.isLoggedin === true) {
		const user = req.session.user;
		const logs = req.session.userLogs;
		res.render('siteHome2', {layout: 'main', user, logs});
	} else {
		res.redirect(303, '/');
	}
	
});

export default router;